#!/bin/bash
# run_mutation.sh — Executa testes de mutação com mutmut

echo "🧬 Iniciando Testes de Mutação..."
echo "=================================="

# Verificar se mutmut está instalado
if ! command -v mutmut &> /dev/null; then
    echo "❌ mutmut não encontrado. Instalando..."
    pip install mutmut
fi

# Executar mutação no seo_checker.py
echo "📁 Alvo: ../../04-seo-audit-tool/seo_checker.py"
echo "🧪 Testes: ./test_seo_checker.py"
echo ""

mutmut run \
    --paths-to-mutate=../../04-seo-audit-tool/seo_checker.py \
    --tests-dir=. \
    --runner="pytest test_seo_checker.py -x -q"

echo ""
echo "📊 Resultados:"
mutmut results

echo ""
echo "💡 Para ver detalhes de um mutante sobrevivente:"
echo "   mutmut show <id>"
echo ""
echo "📈 Para gerar relatório HTML:"
echo "   mutmut html"
