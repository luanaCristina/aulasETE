"""
Servidor Flask — Feira Criativa Recife (Módulo I Python)
========================================================

ETE Advogado José David Gil Rodrigues

Este servidor:
1. Serve a Landing Page com dados dinâmicos (Jinja2)
2. Processa o formulário de contato (POST)
3. Fornece uma mini API JSON para listar artesãos

Para rodar:
    python app.py
    Acesse: http://localhost:5000
"""

import json
import os
from datetime import datetime
from flask import Flask, render_template, request, jsonify, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = 'feira-criativa-secret-key-2025'

# ==================== CAMINHOS DOS ARQUIVOS JSON ====================

DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')
ARTESAOS_FILE = os.path.join(DATA_DIR, 'artesaos.json')
CONTATOS_FILE = os.path.join(DATA_DIR, 'contatos.json')


# ==================== FUNÇÕES AUXILIARES ====================

def carregar_artesaos():
    """Carrega a lista de artesãos do arquivo JSON."""
    try:
        with open(ARTESAOS_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        return []


def salvar_contato(dados):
    """
    Salva uma mensagem de contato no arquivo JSON.
    
    Args:
        dados: dict com nome, email, telefone, tipo_artesanato, mensagem
    """
    contatos = []
    try:
        with open(CONTATOS_FILE, 'r', encoding='utf-8') as f:
            contatos = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        contatos = []

    # Adicionar timestamp e ID
    dados['id'] = len(contatos) + 1
    dados['recebido_em'] = datetime.now().strftime('%d/%m/%Y %H:%M:%S')
    contatos.append(dados)

    with open(CONTATOS_FILE, 'w', encoding='utf-8') as f:
        json.dump(contatos, f, ensure_ascii=False, indent=2)


def validar_email(email):
    """Validação simples de e-mail (server-side)."""
    import re
    padrao = r'^[^\s@]+@[^\s@]+\.[^\s@]+$'
    return re.match(padrao, email) is not None


# ==================== ROTAS ====================

@app.route('/')
def index():
    """
    Página principal — Landing Page.
    Carrega os artesãos do JSON e renderiza com Jinja2.
    """
    artesaos = carregar_artesaos()
    return render_template('index.html', artesaos=artesaos)


@app.route('/contato', methods=['POST'])
def receber_contato():
    """
    Processa o formulário de contato.
    Valida os dados server-side e salva no JSON.
    """
    nome = request.form.get('nome', '').strip()
    email = request.form.get('email', '').strip()
    telefone = request.form.get('telefone', '').strip()
    tipo_artesanato = request.form.get('tipo-artesanato', '').strip()
    mensagem = request.form.get('mensagem', '').strip()

    # Validação server-side
    erros = []
    if not nome or len(nome) < 3:
        erros.append('Nome deve ter pelo menos 3 caracteres.')
    if not email or not validar_email(email):
        erros.append('E-mail inválido.')
    if not mensagem or len(mensagem) < 10:
        erros.append('Mensagem deve ter pelo menos 10 caracteres.')

    if erros:
        # Se veio de JavaScript (AJAX), retorna JSON
        if request.headers.get('Accept') == 'application/json':
            return jsonify({'success': False, 'errors': erros}), 400
        # Se veio do formulário HTML normal, redireciona com flash
        for erro in erros:
            flash(erro, 'error')
        return redirect(url_for('index') + '#contato')

    # Salvar dados
    dados = {
        'nome': nome,
        'email': email,
        'telefone': telefone,
        'tipo_artesanato': tipo_artesanato,
        'mensagem': mensagem,
    }
    salvar_contato(dados)

    # Resposta
    if request.headers.get('Accept') == 'application/json':
        return jsonify({'success': True, 'message': 'Mensagem recebida com sucesso!'}), 201

    flash('✅ Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success')
    return redirect(url_for('index') + '#contato')


# ==================== API JSON (BÔNUS) ====================

@app.route('/api/artesaos', methods=['GET'])
def api_artesaos():
    """
    API simples que retorna os artesãos em JSON.
    Útil para carregar dinamicamente via JavaScript.
    """
    artesaos = carregar_artesaos()
    return jsonify(artesaos), 200


@app.route('/api/contatos', methods=['GET'])
def api_contatos():
    """Lista todas as mensagens recebidas (para uso administrativo)."""
    try:
        with open(CONTATOS_FILE, 'r', encoding='utf-8') as f:
            contatos = json.load(f)
        return jsonify(contatos), 200
    except (FileNotFoundError, json.JSONDecodeError):
        return jsonify([]), 200


# ==================== INICIAR SERVIDOR ====================

if __name__ == '__main__':
    # Criar pasta data se não existir
    os.makedirs(DATA_DIR, exist_ok=True)

    # Criar contatos.json vazio se não existir
    if not os.path.exists(CONTATOS_FILE):
        with open(CONTATOS_FILE, 'w') as f:
            json.dump([], f)

    print('🎨 Feira Criativa Recife — Servidor iniciando...')
    print('📍 Acesse: http://localhost:5000')
    print('─' * 40)

    app.run(debug=True, port=5000)
