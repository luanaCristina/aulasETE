/* 
 * ============================================
 * SISTEMA DE CAIXA DE SUPERMERCADO
 * Etapa 1 - Menu Básico com Loop
 * ============================================
 * Conceitos: enquanto, escolha/caso, variáveis
 * Disciplina: Lógica e Pensamento Computacional
 * ============================================
 */

programa
{
	funcao inicio()
	{
		// Variável para armazenar a opção do usuário
		inteiro opcao = 0

		// Mensagem de boas-vindas
		escreva("========================================\n")
		escreva("   SUPERMERCADO BOM PREÇO - CAIXA PDV  \n")
		escreva("========================================\n\n")

		// Loop principal - repete até o usuário escolher sair (opção 4)
		enquanto (opcao != 4)
		{
			// Exibe o menu de opções
			escreva("\n--- MENU PRINCIPAL ---\n")
			escreva("[1] Registrar Venda\n")
			escreva("[2] Consultar Preço\n")
			escreva("[3] Fechar Caixa\n")
			escreva("[4] Sair do Sistema\n")
			escreva("---------------------\n")
			escreva("Escolha uma opção: ")
			
			// Lê a opção digitada pelo usuário
			leia(opcao)

			// Estrutura escolha/caso - executa ação conforme a opção
			escolha (opcao)
			{
				caso 1:
					escreva("\n[VENDA] Função de venda será implementada na Etapa 3!\n")
					escreva("Aguarde as próximas etapas...\n")
					pare

				caso 2:
					escreva("\n[CONSULTA] Função de consulta será implementada na Etapa 2!\n")
					escreva("Aguarde as próximas etapas...\n")
					pare

				caso 3:
					escreva("\n[CAIXA] Relatório será implementado na Etapa 5!\n")
					escreva("Aguarde as próximas etapas...\n")
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
