/* 
 * ============================================
 * SISTEMA DE CAIXA DE SUPERMERCADO
 * Etapa 4 - Troco e Desconto
 * ============================================
 * Conceitos: condicionais compostas, porcentagem,
 *            validação de pagamento, troco
 * Disciplina: Lógica e Pensamento Computacional
 * ============================================
 */

programa
{
	funcao inicio()
	{
		// ===== VETORES DE PRODUTOS =====
		cadeia produtos[8]
		real precos[8]
		inteiro estoque[8]

		// Pré-cadastro dos produtos
		produtos[0] = "Arroz 5kg"
		precos[0] = 22.90
		estoque[0] = 50

		produtos[1] = "Feijão 1kg"
		precos[1] = 8.50
		estoque[1] = 40

		produtos[2] = "Macarrão 500g"
		precos[2] = 4.75
		estoque[2] = 60

		produtos[3] = "Óleo de Soja 900ml"
		precos[3] = 7.90
		estoque[3] = 35

		produtos[4] = "Açúcar 1kg"
		precos[4] = 5.20
		estoque[4] = 45

		produtos[5] = "Leite Integral 1L"
		precos[5] = 6.30
		estoque[5] = 30

		produtos[6] = "Café 500g"
		precos[6] = 15.90
		estoque[6] = 25

		produtos[7] = "Sal 1kg"
		precos[7] = 3.50
		estoque[7] = 55

		// ===== VARIÁVEIS DO SISTEMA =====
		inteiro opcao = 0
		inteiro codigo = 0
		inteiro qtd = 0
		inteiro continuar_venda = 1
		real subtotal = 0.0
		real total_venda = 0.0
		real desconto = 0.0
		real total_final = 0.0
		real pagamento = 0.0
		real troco = 0.0
		
		// Acumuladores globais
		real total_dia = 0.0
		inteiro num_vendas = 0

		// ===== MENSAGEM DE BOAS-VINDAS =====
		escreva("========================================\n")
		escreva("   SUPERMERCADO BOM PREÇO - CAIXA PDV  \n")
		escreva("========================================\n")
		escreva("  Sistema pronto! 8 produtos carregados.\n\n")

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
					// ===== REGISTRAR VENDA =====
					escreva("\n========================================\n")
					escreva("         NOVA VENDA INICIADA            \n")
					escreva("========================================\n")
					
					total_venda = 0.0
					continuar_venda = 1

					// Loop de itens da venda
					enquanto (continuar_venda == 1)
					{
						escreva("\nProdutos disponíveis:\n")
						para (inteiro i = 0; i < 8; i++)
						{
							escreva("  [", i, "] ", produtos[i], " - R$ ", precos[i], " (", estoque[i], " un.)\n")
						}

						escreva("\nDigite o código do produto: ")
						leia(codigo)

						se (codigo < 0 ou codigo > 7)
						{
							escreva("[ERRO] Código inválido!\n")
						}
						senao
						{
							escreva("Digite a quantidade: ")
							leia(qtd)

							se (qtd <= 0)
							{
								escreva("[ERRO] Quantidade deve ser maior que zero!\n")
							}
							senao se (qtd > estoque[codigo])
							{
								escreva("[ERRO] Estoque insuficiente! Disponível: ", estoque[codigo], "\n")
							}
							senao
							{
								subtotal = precos[codigo] * qtd
								total_venda = total_venda + subtotal
								estoque[codigo] = estoque[codigo] - qtd
								escreva("\n  ✓ ", produtos[codigo], " x", qtd, " = R$ ", subtotal, "\n")
								escreva("  Subtotal: R$ ", total_venda, "\n")
							}
						}

						escreva("\nAdicionar mais itens? (1=Sim / 0=Não): ")
						leia(continuar_venda)
					}

					// ===== FINALIZAR VENDA COM DESCONTO E TROCO =====
					se (total_venda > 0.0)
					{
						escreva("\n----------------------------------------\n")
						escreva("  FINALIZANDO VENDA...\n")
						escreva("----------------------------------------\n")
						escreva("  Total bruto: R$ ", total_venda, "\n")

						// Calcular desconto por faixa de valor
						se (total_venda > 200.0)
						{
							desconto = total_venda * 0.15
							escreva("  Desconto 15% (compra acima de R$200): -R$ ", desconto, "\n")
						}
						senao se (total_venda > 100.0)
						{
							desconto = total_venda * 0.10
							escreva("  Desconto 10% (compra acima de R$100): -R$ ", desconto, "\n")
						}
						senao
						{
							desconto = 0.0
							escreva("  Sem desconto (compra abaixo de R$100)\n")
						}

						// Total com desconto aplicado
						total_final = total_venda - desconto
						escreva("\n  ★ TOTAL A PAGAR: R$ ", total_final, "\n")
						escreva("----------------------------------------\n")

						// Loop de pagamento (repete até valor suficiente)
						pagamento = 0.0
						enquanto (pagamento < total_final)
						{
							escreva("\n  Informe o valor do pagamento: R$ ")
							leia(pagamento)

							se (pagamento < total_final)
							{
								escreva("  [ERRO] Valor insuficiente! Faltam R$ ", total_final - pagamento, "\n")
							}
						}

						// Calcular e mostrar troco
						troco = pagamento - total_final
						escreva("\n  Pagamento: R$ ", pagamento, "\n")
						se (troco > 0.0)
						{
							escreva("  TROCO: R$ ", troco, "\n")
						}
						senao
						{
							escreva("  Pagamento exato! Sem troco.\n")
						}
						escreva("\n========================================\n")
						escreva("  ✓ VENDA CONCLUÍDA COM SUCESSO!\n")
						escreva("========================================\n")

						// Acumular totais do dia
						total_dia = total_dia + total_final
						num_vendas = num_vendas + 1
					}
					senao
					{
						escreva("\n[INFO] Nenhum item vendido. Venda cancelada.\n")
					}
					pare

				caso 2:
					// ===== CONSULTAR PREÇOS =====
					escreva("\n========================================\n")
					escreva("       LISTA DE PRODUTOS DISPONÍVEIS    \n")
					escreva("========================================\n")
					para (inteiro i = 0; i < 8; i++)
					{
						escreva("  [", i, "] ", produtos[i], " | R$ ", precos[i], " | Estoque: ", estoque[i], "\n")
					}
					escreva("========================================\n")
					pare

				caso 3:
					escreva("\n[CAIXA] Total parcial do dia: R$ ", total_dia, "\n")
					escreva("Vendas realizadas: ", num_vendas, "\n")
					escreva("(Relatório completo na Etapa 5)\n")
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
