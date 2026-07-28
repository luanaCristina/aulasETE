/* 
 * ============================================
 * SISTEMA DE CAIXA DE SUPERMERCADO
 * Etapa 5 - Relatórios de Fechamento
 * ============================================
 * Conceitos: busca do menor valor, média,
 *            acumuladores globais, relatórios
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
		
		// Acumuladores globais (relatórios)
		real total_dia = 0.0
		inteiro num_vendas = 0
		real ticket_medio = 0.0

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
			escreva("[3] Fechar Caixa (Relatório)\n")
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

					enquanto (continuar_venda == 1)
					{
						escreva("\nProdutos disponíveis:\n")
						para (inteiro i = 0; i < 8; i++)
						{
							escreva("  [", i, "] ", produtos[i], " - R$ ", precos[i], " (", estoque[i], " un.)\n")
						}

						escreva("\nCódigo do produto: ")
						leia(codigo)

						se (codigo < 0 ou codigo > 7)
						{
							escreva("[ERRO] Código inválido!\n")
						}
						senao
						{
							escreva("Quantidade: ")
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
								escreva("  ✓ ", produtos[codigo], " x", qtd, " = R$ ", subtotal, "\n")
								escreva("  Subtotal: R$ ", total_venda, "\n")
							}
						}
						escreva("\nMais itens? (1=Sim / 0=Não): ")
						leia(continuar_venda)
					}

					// Finalizar venda com desconto e troco
					se (total_venda > 0.0)
					{
						escreva("\n----------------------------------------\n")
						escreva("  Total bruto: R$ ", total_venda, "\n")

						se (total_venda > 200.0)
						{
							desconto = total_venda * 0.15
							escreva("  Desconto 15%: -R$ ", desconto, "\n")
						}
						senao se (total_venda > 100.0)
						{
							desconto = total_venda * 0.10
							escreva("  Desconto 10%: -R$ ", desconto, "\n")
						}
						senao
						{
							desconto = 0.0
						}

						total_final = total_venda - desconto
						escreva("  ★ TOTAL A PAGAR: R$ ", total_final, "\n")
						escreva("----------------------------------------\n")

						pagamento = 0.0
						enquanto (pagamento < total_final)
						{
							escreva("  Pagamento: R$ ")
							leia(pagamento)
							se (pagamento < total_final)
							{
								escreva("  [ERRO] Insuficiente! Faltam R$ ", total_final - pagamento, "\n")
							}
						}

						troco = pagamento - total_final
						se (troco > 0.0)
						{
							escreva("  TROCO: R$ ", troco, "\n")
						}
						escreva("\n  ✓ VENDA CONCLUÍDA!\n")

						total_dia = total_dia + total_final
						num_vendas = num_vendas + 1
					}
					senao
					{
						escreva("\n[INFO] Venda cancelada.\n")
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
					// ===== RELATÓRIO DE FECHAMENTO DE CAIXA =====
					escreva("\n╔══════════════════════════════════════╗\n")
					escreva("║   RELATÓRIO DE FECHAMENTO DE CAIXA  ║\n")
					escreva("╚══════════════════════════════════════╝\n\n")

					escreva("  Vendas realizadas: ", num_vendas, "\n")
					escreva("  Total do dia: R$ ", total_dia, "\n")

					// Calcular ticket médio
					se (num_vendas > 0)
					{
						ticket_medio = total_dia / num_vendas
						escreva("  Ticket médio: R$ ", ticket_medio, "\n")
					}
					senao
					{
						escreva("  Ticket médio: N/A (nenhuma venda)\n")
					}

					// Encontrar produto com menor estoque (alerta)
					escreva("\n  --- Alerta de Estoque Baixo ---\n")
					inteiro menor_estoque = estoque[0]
					inteiro idx_menor = 0
					
					para (inteiro i = 1; i < 8; i++)
					{
						se (estoque[i] < menor_estoque)
						{
							menor_estoque = estoque[i]
							idx_menor = i
						}
					}
					
					escreva("  ⚠ Produto com menor estoque:\n")
					escreva("    ", produtos[idx_menor], " - apenas ", menor_estoque, " unidades!\n")

					// Mostrar todos os produtos com estoque baixo (< 20)
					escreva("\n  Produtos com estoque < 20 unidades:\n")
					inteiro tem_baixo = 0
					para (inteiro i = 0; i < 8; i++)
					{
						se (estoque[i] < 20)
						{
							escreva("    ⚠ ", produtos[i], ": ", estoque[i], " un.\n")
							tem_baixo = 1
						}
					}
					se (tem_baixo == 0)
					{
						escreva("    Nenhum produto com estoque crítico.\n")
					}

					escreva("\n========================================\n")
					pare

				caso 4:
					escreva("\n========================================\n")
					escreva("  Obrigado por usar o sistema! Até logo!\n")
					escreva("========================================\n")
					pare

				caso contrario:
					escreva("\n[ERRO] Opção inválida!\n")
					pare
			}
		}
	}
}
