"""
Servidor Flask — API REST do Salão Beleza & Arte
=================================================

Módulo II — ETE Advogado José David Gil Rodrigues

Endpoints:
- GET/POST   /api/clientes
- GET/POST   /api/agendamentos
- PATCH      /api/agendamentos/:id/cancelar
- GET        /api/profissionais
- GET        /api/servicos
- GET        /api/relatorios/agenda-dia?data=YYYY-MM-DD

TODO para o aluno:
1. Implementar PUT /api/clientes/:id (atualizar cliente)
2. Implementar DELETE /api/clientes/:id (remover cliente)
3. Adicionar filtros na listagem de agendamentos (por data, profissional)
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime

from database import execute_query
from models.agendamento import Agendamento
from exceptions import (
    SalaoException,
    HorarioConflitanteError,
    HorarioForaExpedienteError,
)

app = Flask(__name__)
CORS(app)  # Permite requisições do front-end (porta diferente)


# ==================== CLIENTES ====================

@app.route('/api/clientes', methods=['GET'])
def listar_clientes():
    """Lista todos os clientes cadastrados."""
    clientes = execute_query("SELECT * FROM clientes ORDER BY nome")
    return jsonify(clientes), 200


@app.route('/api/clientes', methods=['POST'])
def criar_cliente():
    """Cria um novo cliente."""
    dados = request.get_json()

    if not dados.get('nome') or not dados.get('telefone'):
        return jsonify({'error': 'Nome e telefone são obrigatórios'}), 400

    try:
        execute_query(
            "INSERT INTO clientes (nome, telefone, email) VALUES (%s, %s, %s)",
            (dados['nome'], dados['telefone'], dados.get('email')),
            fetch=False
        )
        return jsonify({'message': 'Cliente criado com sucesso'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500


# ==================== PROFISSIONAIS ====================

@app.route('/api/profissionais', methods=['GET'])
def listar_profissionais():
    """Lista profissionais ativos com seus serviços."""
    profissionais = execute_query("""
        SELECT p.*, 
               ARRAY_AGG(s.nome) FILTER (WHERE s.nome IS NOT NULL) AS servicos
        FROM profissionais p
        LEFT JOIN profissional_servico ps ON p.id = ps.profissional_id
        LEFT JOIN servicos s ON ps.servico_id = s.id
        WHERE p.ativo = TRUE
        GROUP BY p.id
        ORDER BY p.nome
    """)
    return jsonify(profissionais), 200


# ==================== SERVIÇOS ====================

@app.route('/api/servicos', methods=['GET'])
def listar_servicos():
    """Lista todos os serviços ativos."""
    servicos = execute_query(
        "SELECT * FROM servicos WHERE ativo = TRUE ORDER BY nome"
    )
    return jsonify(servicos), 200


# ==================== AGENDAMENTOS ====================

@app.route('/api/agendamentos', methods=['GET'])
def listar_agendamentos():
    """Lista agendamentos com detalhes (JOIN)."""
    agendamentos = execute_query("""
        SELECT 
            a.id, a.data_hora, a.status, a.observacoes,
            c.nome AS cliente_nome, c.telefone AS cliente_telefone,
            p.nome AS profissional_nome,
            s.nome AS servico_nome, s.duracao_min, s.preco
        FROM agendamentos a
        INNER JOIN clientes c ON a.cliente_id = c.id
        INNER JOIN profissionais p ON a.profissional_id = p.id
        INNER JOIN servicos s ON a.servico_id = s.id
        ORDER BY a.data_hora DESC
        LIMIT 50
    """)
    return jsonify(agendamentos), 200


@app.route('/api/agendamentos', methods=['POST'])
def criar_agendamento():
    """
    Cria um novo agendamento com validação de regras de negócio.
    
    Body JSON esperado:
    {
        "cliente_id": 1,
        "profissional_id": 2,
        "servico_id": 3,
        "data_hora": "2025-08-05T10:00:00",
        "observacoes": "Opcional"
    }
    """
    dados = request.get_json()

    # Validar campos obrigatórios
    campos_obrigatorios = ['cliente_id', 'profissional_id', 'servico_id', 'data_hora']
    for campo in campos_obrigatorios:
        if campo not in dados:
            return jsonify({'error': f'Campo obrigatório ausente: {campo}'}), 400

    try:
        data_hora = datetime.fromisoformat(dados['data_hora'])
    except ValueError:
        return jsonify({'error': 'Formato de data/hora inválido. Use: YYYY-MM-DDTHH:MM:SS'}), 400

    # Buscar duração do serviço
    servico = execute_query(
        "SELECT duracao_min FROM servicos WHERE id = %s",
        (dados['servico_id'],)
    )
    if not servico:
        return jsonify({'error': 'Serviço não encontrado'}), 404

    duracao = servico[0]['duracao_min']

    # REGRA 1: Validar horário de expediente
    try:
        Agendamento.validar_horario_expediente(data_hora, duracao)
    except HorarioForaExpedienteError as e:
        return jsonify({'error': e.message, 'code': e.code}), 400

    # REGRA 2: Verificar conflito de horário
    agendamentos_dia = execute_query("""
        SELECT a.data_hora, s.duracao_min
        FROM agendamentos a
        INNER JOIN servicos s ON a.servico_id = s.id
        WHERE a.profissional_id = %s
          AND DATE(a.data_hora) = %s
          AND a.status = 'confirmado'
    """, (dados['profissional_id'], data_hora.date()))

    tem_conflito = Agendamento.verificar_conflito_horario(data_hora, duracao, agendamentos_dia)
    if tem_conflito:
        return jsonify({
            'error': 'Conflito de horário! O profissional já tem agendamento nesse período.',
            'code': 'HORARIO_CONFLITANTE'
        }), 409

    # Criar agendamento no banco
    try:
        execute_query("""
            INSERT INTO agendamentos (cliente_id, profissional_id, servico_id, data_hora, observacoes)
            VALUES (%s, %s, %s, %s, %s)
        """, (
            dados['cliente_id'],
            dados['profissional_id'],
            dados['servico_id'],
            data_hora,
            dados.get('observacoes')
        ), fetch=False)

        return jsonify({'message': 'Agendamento criado com sucesso!'}), 201

    except Exception as e:
        return jsonify({'error': f'Erro ao criar agendamento: {str(e)}'}), 500


@app.route('/api/agendamentos/<int:id>/cancelar', methods=['PATCH'])
def cancelar_agendamento(id):
    """Cancela um agendamento confirmado."""
    agendamento = execute_query(
        "SELECT * FROM agendamentos WHERE id = %s",
        (id,)
    )

    if not agendamento:
        return jsonify({'error': 'Agendamento não encontrado'}), 404

    if agendamento[0]['status'] != 'confirmado':
        return jsonify({
            'error': f"Não é possível cancelar. Status atual: {agendamento[0]['status']}",
            'code': 'CANCELAMENTO_INVALIDO'
        }), 400

    execute_query(
        "UPDATE agendamentos SET status = 'cancelado', updated_at = NOW() WHERE id = %s",
        (id,),
        fetch=False
    )

    return jsonify({'message': f'Agendamento #{id} cancelado com sucesso'}), 200


# ==================== RELATÓRIOS ====================

@app.route('/api/relatorios/agenda-dia', methods=['GET'])
def relatorio_agenda_dia():
    """
    Retorna a agenda de um dia específico.
    Query param: ?data=2025-08-05
    """
    data = request.args.get('data')
    if not data:
        data = datetime.now().strftime('%Y-%m-%d')

    agenda = execute_query("""
        SELECT 
            a.data_hora, a.status,
            c.nome AS cliente,
            p.nome AS profissional,
            s.nome AS servico,
            s.duracao_min
        FROM agendamentos a
        INNER JOIN clientes c ON a.cliente_id = c.id
        INNER JOIN profissionais p ON a.profissional_id = p.id
        INNER JOIN servicos s ON a.servico_id = s.id
        WHERE DATE(a.data_hora) = %s
          AND a.status = 'confirmado'
        ORDER BY a.data_hora, p.nome
    """, (data,))

    return jsonify({
        'data': data,
        'total': len(agenda),
        'agendamentos': agenda
    }), 200


# ==================== INICIAR SERVIDOR ====================

if __name__ == '__main__':
    print("🏪 Salão Beleza & Arte — API iniciando...")
    print("📍 Acesse: http://localhost:5000")
    print("📖 Endpoints disponíveis:")
    print("   GET  /api/clientes")
    print("   POST /api/clientes")
    print("   GET  /api/profissionais")
    print("   GET  /api/servicos")
    print("   GET  /api/agendamentos")
    print("   POST /api/agendamentos")
    print("   PATCH /api/agendamentos/:id/cancelar")
    print("   GET  /api/relatorios/agenda-dia?data=YYYY-MM-DD")
    print("-" * 50)

    app.run(debug=True, port=5000)
