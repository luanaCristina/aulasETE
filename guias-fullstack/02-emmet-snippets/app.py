"""
app.py — Servidor Flask demonstrando snippets de produtividade Python

Snippets utilizados na criação:
- froute  → Flask route decorator
- tryex   → try/except block
- cls     → class com __init__
- lcomp   → list comprehension
- deco    → decorator pattern
"""

from flask import Flask, jsonify, request
from datetime import datetime
from functools import wraps

app = Flask(__name__)

# ============ DADOS (snippet: dict/list) ============

tarefas = [
    {"id": 1, "titulo": "Estudar Bootstrap", "concluida": True, "prioridade": "alta", "criado_em": "2026-07-01"},
    {"id": 2, "titulo": "Praticar Emmet", "concluida": False, "prioridade": "media", "criado_em": "2026-07-10"},
    {"id": 3, "titulo": "Configurar MCP", "concluida": False, "prioridade": "alta", "criado_em": "2026-07-15"},
    {"id": 4, "titulo": "Otimizar SEO", "concluida": False, "prioridade": "baixa", "criado_em": "2026-07-20"},
    {"id": 5, "titulo": "Implementar Mapas", "concluida": True, "prioridade": "media", "criado_em": "2026-07-25"},
]


# ============ DECORATOR (snippet: deco) ============

def log_request(f):
    """Decorator que loga cada requisição recebida"""
    @wraps(f)
    def decorated(*args, **kwargs):
        print(f"[{datetime.now().strftime('%H:%M:%S')}] {request.method} {request.path}")
        return f(*args, **kwargs)
    return decorated


# ============ CLASSE (snippet: cls) ============

class TarefaService:
    """Serviço de gerenciamento de tarefas"""

    def __init__(self, dados):
        self.dados = dados

    def listar(self, filtro_prioridade=None):
        if filtro_prioridade:
            return [t for t in self.dados if t["prioridade"] == filtro_prioridade]
        return self.dados

    def buscar_por_id(self, tarefa_id):
        return next((t for t in self.dados if t["id"] == tarefa_id), None)

    def criar(self, titulo, prioridade="media"):
        nova = {
            "id": len(self.dados) + 1,
            "titulo": titulo,
            "concluida": False,
            "prioridade": prioridade,
            "criado_em": datetime.now().strftime("%Y-%m-%d"),
        }
        self.dados.append(nova)
        return nova

    def estatisticas(self):
        total = len(self.dados)
        concluidas = len([t for t in self.dados if t["concluida"]])
        por_prioridade = {}
        for t in self.dados:
            prio = t["prioridade"]
            por_prioridade[prio] = por_prioridade.get(prio, 0) + 1
        return {
            "total": total,
            "concluidas": concluidas,
            "pendentes": total - concluidas,
            "taxa_conclusao": f"{(concluidas / total * 100):.1f}%",
            "por_prioridade": por_prioridade,
        }


service = TarefaService(tarefas)


# ============ ROTAS (snippet: froute) ============

@app.route("/api/tarefas", methods=["GET"])
@log_request
def listar_tarefas():
    """Lista todas as tarefas com filtro opcional por prioridade"""
    try:
        prioridade = request.args.get("prioridade")
        resultado = service.listar(prioridade)
        return jsonify({"total": len(resultado), "data": resultado})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/tarefas/<int:tarefa_id>", methods=["GET"])
@log_request
def buscar_tarefa(tarefa_id):
    """Busca uma tarefa por ID"""
    try:
        tarefa = service.buscar_por_id(tarefa_id)
        if not tarefa:
            return jsonify({"error": "Tarefa não encontrada"}), 404
        return jsonify(tarefa)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/tarefas", methods=["POST"])
@log_request
def criar_tarefa():
    """Cria uma nova tarefa"""
    try:
        dados = request.get_json()
        if not dados or not dados.get("titulo"):
            return jsonify({"error": "Título é obrigatório"}), 400
        nova = service.criar(dados["titulo"], dados.get("prioridade", "media"))
        return jsonify(nova), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/stats", methods=["GET"])
@log_request
def estatisticas():
    """Retorna estatísticas das tarefas"""
    try:
        return jsonify(service.estatisticas())
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# ============ MAIN (snippet: ifmain) ============

if __name__ == "__main__":
    print("🐍 Servidor Flask rodando em http://localhost:5000")
    print("📋 Endpoints:")
    print("   GET  /api/tarefas")
    print("   GET  /api/tarefas/<id>")
    print("   POST /api/tarefas")
    print("   GET  /api/stats")
    app.run(debug=True, port=5000)
