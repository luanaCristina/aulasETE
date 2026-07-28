"""
Calculadora — Python + Flask
Serve interface web e processa cálculos no servidor.
"""
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


def calcular(a: float, operador: str, b: float) -> dict:
    """Executa o cálculo com tratamento de erro."""
    if operador == '/' and b == 0:
        return {"erro": "Divisão por zero não é permitida!", "resultado": None}

    operacoes = {
        '+': a + b,
        '-': a - b,
        '*': a * b,
        '/': a / b,
    }

    if operador not in operacoes:
        return {"erro": f"Operador inválido: {operador}", "resultado": None}

    resultado = round(operacoes[operador], 8)
    return {"erro": None, "resultado": resultado}


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/calcular', methods=['POST'])
def api_calcular():
    """Endpoint que recebe JSON e retorna resultado."""
    dados = request.get_json()
    a = float(dados.get('a', 0))
    b = float(dados.get('b', 0))
    operador = dados.get('operador', '+')

    resultado = calcular(a, operador, b)
    return jsonify(resultado)


if __name__ == '__main__':
    print('🐍 Calculadora Python rodando em http://localhost:5000')
    app.run(debug=True, port=5000)
