/* 
 * ============================================
 * SISTEMA DE CAIXA DE SUPERMERCADO
 * Etapa 2 - Cadastro de Produtos com Vetores
 * ============================================
 * Conceitos: vetores (arrays), laço para, índices
 * Disciplina: Lógica e Pensamento Computacional
 * ============================================
 */

programa
{
	funcao inicio()
	{
		// ===== DECLARAÇÃO DOS VETORES DE PRODUTOS =====
		// Cada vetor tem 8 posições (índices de 0 a 7)
		
		cadeia produtos[8]     // Nomes dos produtos
		real precos[8]         // Preços dos produtos
		inteiro estoque[8]     // Quantidade em estoque

		// ===== PRÉ-CADASTRO DOS PRODUTOS =====
		// Produto 0
		produtos[0] = "Arroz 5kg"
		precos[0] = 22.90
		estoque[0] = 50

		// Produto 1
		produtos[1] = "Feijão 1kg"
		precos[1] = 8.50
		estoque[1] = 40

		// Produto 2
		produtos[2] = "Macarrão 500g"
		precos[2] = 4.75
		estoque[2] = 60

		// Produto 3
		produtos[3] = "Óleo de Soja 900ml"
		precos[3] = 7.90
		estoque[3] = 35

		// Produto 4
		produtos[4] = "Açúcar 1kg"
		precos[4] = 5.20
		estoque[4] = 45

		// Produto 5
		produtos[5] = "Leite Integral 1L"
		precos[5] = 6.30
		estoque[5] = 30

		// Produto 6
		produtos[6] = "Café 500g"
		precos[6] = 15.90
		estoque[6] = 25

		// Produto 7
		produtos[7] = "Sal 1kg"
		precos[7] = 3.50
		estoque[7] = 55

		// ===== VARIÁVEIS DO SISTEMA =====
		inteiro opcao = 0
		inteiro codigo = 0

		// ===== MENSAGEM DE BOAS-VINDAS =====
		escreva("========================================\n")
		escreva("   SUPERMERCADO BOM PREÇO - CAIXA PDV  \n")
		escreva("========================================\n")
		escreva("  8 produtos cadastrados com sucesso!  \n\n")

		// ===== LOOP PRINCIPAL DO MENU =====
		enquanto (opcao != 4)
		{
			escreva("\n--- MENU PRINCIPAL ---\n")
			escreva("[1] Registrar Venda\n")
			escreva("[2] Consultar Preços\n")
			escreva("[3] Fechar Caixa\n")
			escreva("[4] Sair do Sistema\n")
			escreva("---------------------\n")
			escreva("Escolha uma opção: ")
			leia(opcao)

			escolha (opcao)
			{
				caso 1:
					escreva("\n[VENDA] Será implementada na Etapa 3!\n")
					pare

				caso 2:
					// === LISTAR TODOS OS PRODUTOS ===
					escreva("\n========================================\n")
					escreva("       LISTA DE PRODUTOS DISPONÍVEIS    \n")
					escreva("========================================\n")
					escreva("CÓD | PRODUTO             | PREÇO    | ESTOQUE\n")
					escreva("----+-----------------------+----------+--------\n")
					
					// Laço PARA percorre todos os produtos
					para (inteiro i = 0; i < 8; i++)
					{
						escreva(" ", i, "  | ", produtos[i], " | R$ ", precos[i], " | ", estoque[i], " un.\n")
					}
					
					escreva("========================================\n")
					
					// Consultar produto específico por código
					escreva("\nDigite o código do produto para ver detalhes (ou -1 para voltar): ")
					leia(codigo)
					
					se (codigo >= 0 e codigo < 8)
					{
						escreva("\n--- Detalhes do Produto ---\n")
						escreva("Nome: ", produtos[codigo], "\n")
						escreva("Preço: R$ ", precos[codigo], "\n")
						escreva("Estoque: ", estoque[codigo], " unidades\n")
					}
					senao se (codigo != -1)
					{
						escreva("\n[ERRO] Código inválido! Use de 0 a 7.\n")
					}
					pare

				caso 3:
					escreva("\n[CAIXA] Relatório será implementado na Etapa 5!\n")
					pare

				caso 4:
					escreva("\n========================================\n")
					escreva("  Obrigado por usar o sistema! Até logo!\n")
					escreva("========================================\n")
					pare

				caso contrario:
					escreva("\n[ERRO] Opção inválida! Digite 1, 2, 3 ou 4.\n")
					pare
			}
		}
	}
}
