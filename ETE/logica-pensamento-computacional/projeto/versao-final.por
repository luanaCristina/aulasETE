/* 
 * ╔══════════════════════════════════════════════════════╗
 * ║   SISTEMA DE CAIXA DE SUPERMERCADO - VERSÃO FINAL   ║
 * ╠══════════════════════════════════════════════════════╣
 * ║ Disciplina: Lógica e Pensamento Computacional       ║
 * ║ Projeto: Sistema de Caixa PDV (Ponto de Venda)      ║
 * ║ Versão: 1.0 - Completa                              ║
 * ╠══════════════════════════════════════════════════════╣
 * ║ FUNCIONALIDADES:                                     ║
 * ║ - Menu interativo com loop                           ║
 * ║ - 8 produtos pré-cadastrados                         ║
 * ║ - Registro de vendas com validação de estoque        ║
 * ║ - Desconto automático por faixa de valor             ║
 * ║ - Cálculo de troco                                   ║
 * ║ - Relatório de fechamento de caixa                   ║
 * ╠══════════════════════════════════════════════════════╣
 * ║ CONCEITOS APLICADOS:                                 ║
 * ║ - Variáveis (inteiro, real, cadeia)                  ║
 * ║ - Vetores (arrays)                                   ║
 * ║ - Laços (enquanto, para)                             ║
 * ║ - Condicionais (se/senao, escolha/caso)              ║
 * ║ - Acumuladores e contadores                          ║
 * ║ - Algoritmo de busca (menor valor)                   ║
 * ║ - Validação de dados                                 ║
 * ╚══════════════════════════════════════════════════════╝
 */

programa
{
	funcao inicio()
	{
		// ═══════════════════════════════════════════════
		// SEÇÃO 1: DECLARAÇÃO DOS VETORES DE PRODUTOS
		// ═══════════════════════════════════════════════
		// Utilizamos 3 vetores paralelos: mesmo índice = mesmo produto
		
		cadeia produtos[8]     // Nomes dos produtos
		real precos[8]         // Preços unitários (R$)
		inteiro estoque[8]     // Quantidade disponível em estoque

		// ═══════════════════════════════════════════════
		// SEÇÃO 2: PRÉ-CADASTRO DOS 8 PRODUTOS
		// ═══════════════════════════════════════════════
		// Simulando um banco de dados de produtos

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

		// ═══════════════════════════════════════════════
		// SEÇÃO 3: VARIÁVEIS DE CONTROLE DO SISTEMA
		// ═══════════════════════════════════════════════
		
		inteiro opcao = 0              // Opção do menu principal
		inteiro codigo = 0             // Código do produto selecionado
		inteiro qtd = 0                // Quantidade desejada
		inteiro continuar_venda = 1    // Flag: 1=continuar, 0=parar

		// Variáveis de cálculo da venda
		real subtotal = 0.0            // Preço x quantidade do item
		real total_venda = 0.0         // Soma dos itens na venda atual
		real desconto = 0.0            // Valor do desconto calculado
		real total_final = 0.0         // Total após desconto
		real pagamento = 0.0           // Valor pago pelo cliente
		real troco = 0.0               // Troco a devolver

		// Acumuladores globais (dados do dia inteiro)
		real total_dia = 0.0           // Soma de todas as vendas do dia
		inteiro num_vendas = 0         // Contador de vendas realizadas
		real ticket_medio = 0.0        // Média por venda

		// ═══════════════════════════════════════════════
		// SEÇÃO 4: TELA DE ABERTURA DO SISTEMA
		// ═══════════════════════════════════════════════
		
		escreva("╔══════════════════════════════════════╗\n")
		escreva("║                                      ║\n")
		escreva("║   SUPERMERCADO BOM PREÇO             ║\n")
		escreva("║   Sistema de Caixa PDV v1.0          ║\n")
		escreva("║                                      ║\n")
		escreva("╠══════════════════════════════════════╣\n")
		escreva("║  8 produtos carregados               ║\n")
		escreva("║  Caixa aberto e pronto!              ║\n")
		escreva("╚══════════════════════════════════════╝\n\n")

		// ═══════════════════════════════════════════════
		// SEÇÃO 5: LOOP PRINCIPAL DO SISTEMA (MENU)
		// ═══════════════════════════════════════════════
		// O programa roda indefinidamente até o usuário
		// escolher a opção 4 (Sair)
		
		enquanto (opcao != 4)
		{
			// --- Exibir menu ---
			escreva("\n┌──────────────────────────────┐\n")
			escreva("│      MENU PRINCIPAL          │\n")
			escreva("├──────────────────────────────┤\n")
			escreva("│  [1] Registrar Venda         │\n")
			escreva("│  [2] Consultar Produtos      │\n")
			escreva("│  [3] Fechar Caixa            │\n")
			escreva("│  [4] Sair do Sistema         │\n")
			escreva("└──────────────────────────────┘\n")
			escreva("  Sua opção: ")
			leia(opcao)

			// --- Processar opção escolhida ---
			escolha (opcao)
			{
				// ═════════════════════════════════════
				// OPÇÃO 1: REGISTRAR VENDA
				// ═════════════════════════════════════
				caso 1:
					escreva("\n╔══════════════════════════════════════╗\n")
					escreva("║         NOVA VENDA - CUPOM FISCAL    ║\n")
					escreva("╚══════════════════════════════════════╝\n")
					
					// Resetar variáveis da venda atual
					total_venda = 0.0
					continuar_venda = 1
					inteiro itens_venda = 0  // Conta itens nesta venda

					// --- Loop de adição de itens ---
					// Repete enquanto o operador quiser adicionar produtos
					enquanto (continuar_venda == 1)
					{
						// Mostrar catálogo de produtos
						escreva("\n  ── Produtos Disponíveis ──────────────\n")
						para (inteiro i = 0; i < 8; i++)
						{
							se (estoque[i] > 0)
							{
								escreva("  [", i, "] ", produtos[i])
								escreva(" | R$ ", precos[i])
								escreva(" | Estoque: ", estoque[i], "\n")
							}
							senao
							{
								escreva("  [", i, "] ", produtos[i], " | ESGOTADO\n")
							}
						}
						escreva("  ────────────────────────────────────\n")

						// Solicitar código do produto
						escreva("\n  Código do produto: ")
						leia(codigo)

						// Validar código (deve ser entre 0 e 7)
						se (codigo < 0 ou codigo > 7)
						{
							escreva("  ✗ ERRO: Código inválido! Use 0 a 7.\n")
						}
						senao se (estoque[codigo] == 0)
						{
							escreva("  ✗ ERRO: Produto ESGOTADO!\n")
						}
						senao
						{
							// Produto válido - pedir quantidade
							escreva("  Quantidade: ")
							leia(qtd)

							// Validar quantidade
							se (qtd <= 0)
							{
								escreva("  ✗ ERRO: Quantidade deve ser maior que zero!\n")
							}
							senao se (qtd > estoque[codigo])
							{
								escreva("  ✗ ERRO: Estoque insuficiente!\n")
								escreva("    Disponível: ", estoque[codigo], " unidades\n")
								escreva("    Solicitado: ", qtd, " unidades\n")
							}
							senao
							{
								// ═══ VENDA APROVADA ═══
								// Calcular subtotal deste item
								subtotal = precos[codigo] * qtd

								// Acumular no total da venda
								total_venda = total_venda + subtotal

								// Diminuir estoque do produto
								estoque[codigo] = estoque[codigo] - qtd

								// Incrementar contador de itens
								itens_venda = itens_venda + 1

								// Exibir confirmação do item
								escreva("\n  ┌─────────────────────────────────\n")
								escreva("  │ ✓ Item adicionado!\n")
								escreva("  │ ", produtos[codigo], "\n")
								escreva("  │ ", qtd, " x R$ ", precos[codigo], " = R$ ", subtotal, "\n")
								escreva("  │ Subtotal da venda: R$ ", total_venda, "\n")
								escreva("  └─────────────────────────────────\n")
							}
						}

						// Perguntar se quer continuar adicionando
						escreva("\n  Adicionar mais itens? (1=Sim / 0=Finalizar): ")
						leia(continuar_venda)
					}

					// ═══════════════════════════════════
					// FINALIZAÇÃO DA VENDA
					// ═══════════════════════════════════
					se (total_venda > 0.0)
					{
						escreva("\n  ════════════════════════════════════\n")
						escreva("  FINALIZANDO VENDA (", itens_venda, " itens)\n")
						escreva("  ════════════════════════════════════\n")
						escreva("  Total bruto: R$ ", total_venda, "\n")

						// --- Cálculo do desconto por faixa ---
						// Regra: >R$200 = 15%, >R$100 = 10%, senão 0%
						se (total_venda > 200.0)
						{
							desconto = total_venda * 0.15
							escreva("  ★ Desconto 15% (acima de R$200): -R$ ", desconto, "\n")
						}
						senao se (total_venda > 100.0)
						{
							desconto = total_venda * 0.10
							escreva("  ★ Desconto 10% (acima de R$100): -R$ ", desconto, "\n")
						}
						senao
						{
							desconto = 0.0
							escreva("  (Sem desconto - compra abaixo de R$100)\n")
						}

						// Aplicar desconto
						total_final = total_venda - desconto

						escreva("\n  ╔════════════════════════════════╗\n")
						escreva("  ║  TOTAL A PAGAR: R$ ", total_final, "\n")
						escreva("  ╚════════════════════════════════╝\n")

						// --- Receber pagamento ---
						// Loop até o cliente pagar valor suficiente
						pagamento = 0.0
						enquanto (pagamento < total_final)
						{
							escreva("\n  Valor pago pelo cliente: R$ ")
							leia(pagamento)

							se (pagamento < total_final)
							{
								escreva("  ✗ Valor insuficiente!\n")
								escreva("    Faltam: R$ ", total_final - pagamento, "\n")
							}
						}

						// --- Calcular troco ---
						troco = pagamento - total_final

						escreva("\n  ────────────────────────────────────\n")
						escreva("  Pagamento recebido: R$ ", pagamento, "\n")
						se (troco > 0.0)
						{
							escreva("  TROCO: R$ ", troco, "\n")
						}
						senao
						{
							escreva("  Pagamento exato - sem troco.\n")
						}
						escreva("  ────────────────────────────────────\n")

						escreva("\n  ╔════════════════════════════════╗\n")
						escreva("  ║  ✓ VENDA CONCLUÍDA!            ║\n")
						escreva("  ║    Obrigado pela compra!        ║\n")
						escreva("  ╚════════════════════════════════╝\n")

						// Acumular nos totais do dia
						total_dia = total_dia + total_final
						num_vendas = num_vendas + 1
					}
					senao
					{
						escreva("\n  [INFO] Nenhum item adicionado. Venda cancelada.\n")
					}
					pare

				// ═════════════════════════════════════
				// OPÇÃO 2: CONSULTAR PRODUTOS
				// ═════════════════════════════════════
				caso 2:
					escreva("\n╔══════════════════════════════════════╗\n")
					escreva("║      CATÁLOGO DE PRODUTOS            ║\n")
					escreva("╚══════════════════════════════════════╝\n\n")
					escreva("  CÓD | PRODUTO              | PREÇO     | ESTOQUE\n")
					escreva("  ────┼──────────────────────┼───────────┼────────\n")
					
					para (inteiro i = 0; i < 8; i++)
					{
						se (estoque[i] > 0)
						{
							escreva("   ", i, "  | ", produtos[i])
							escreva(" | R$ ", precos[i])
							escreva(" | ", estoque[i], " un.\n")
						}
						senao
						{
							escreva("   ", i, "  | ", produtos[i])
							escreva(" | R$ ", precos[i])
							escreva(" | ESGOTADO\n")
						}
					}
					escreva("  ────────────────────────────────────────────────\n")
					
					// Consulta individual
					escreva("\n  Ver detalhes? Digite código (ou -1 para voltar): ")
					leia(codigo)
					
					se (codigo >= 0 e codigo < 8)
					{
						escreva("\n  ┌─── Detalhes do Produto ────────────\n")
						escreva("  │ Nome: ", produtos[codigo], "\n")
						escreva("  │ Preço unitário: R$ ", precos[codigo], "\n")
						escreva("  │ Estoque atual: ", estoque[codigo], " unidades\n")
						se (estoque[codigo] < 10)
						{
							escreva("  │ ⚠ ESTOQUE BAIXO! Solicitar reposição.\n")
						}
						escreva("  └───────────────────────────────────\n")
					}
					pare

				// ═════════════════════════════════════
				// OPÇÃO 3: FECHAR CAIXA (RELATÓRIO)
				// ═════════════════════════════════════
				caso 3:
					escreva("\n╔══════════════════════════════════════╗\n")
					escreva("║   RELATÓRIO DE FECHAMENTO DE CAIXA   ║\n")
					escreva("╠══════════════════════════════════════╣\n")
					escreva("║                                      ║\n")

					// --- Resumo financeiro ---
					escreva("║  RESUMO FINANCEIRO                   ║\n")
					escreva("║  ─────────────────                   ║\n")
					escreva("╚══════════════════════════════════════╝\n\n")
					
					escreva("  Total de vendas do dia: R$ ", total_dia, "\n")
					escreva("  Número de vendas: ", num_vendas, "\n")

					// Calcular ticket médio (total / num_vendas)
					se (num_vendas > 0)
					{
						ticket_medio = total_dia / num_vendas
						escreva("  Ticket médio: R$ ", ticket_medio, "\n")
					}
					senao
					{
						escreva("  Ticket médio: N/A (nenhuma venda realizada)\n")
					}

					// --- Alerta de estoque ---
					escreva("\n  ┌─── ALERTA DE ESTOQUE ───────────────\n")
					
					// Algoritmo: encontrar o produto com MENOR estoque
					// Começa assumindo que o primeiro é o menor
					inteiro menor_est = estoque[0]
					inteiro idx_menor = 0
					
					// Compara com todos os outros
					para (inteiro i = 1; i < 8; i++)
					{
						se (estoque[i] < menor_est)
						{
							menor_est = estoque[i]
							idx_menor = i
						}
					}
					
					escreva("  │ Produto com menor estoque:\n")
					escreva("  │ ⚠ ", produtos[idx_menor], ": ", menor_est, " unidades\n")
					escreva("  │\n")

					// Listar todos com estoque crítico (< 20)
					escreva("  │ Produtos com estoque < 20 unidades:\n")
					inteiro encontrou_baixo = 0
					para (inteiro i = 0; i < 8; i++)
					{
						se (estoque[i] < 20)
						{
							escreva("  │   ⚠ ", produtos[i], ": ", estoque[i], " un.\n")
							encontrou_baixo = 1
						}
					}
					se (encontrou_baixo == 0)
					{
						escreva("  │   ✓ Todos os produtos com estoque adequado!\n")
					}
					escreva("  └────────────────────────────────────\n")

					// --- Situação do estoque geral ---
					escreva("\n  ┌─── ESTOQUE ATUAL ───────────────────\n")
					para (inteiro i = 0; i < 8; i++)
					{
						escreva("  │ ", produtos[i], ": ", estoque[i], " un.\n")
					}
					escreva("  └────────────────────────────────────\n")

					escreva("\n  ════════════════════════════════════\n")
					escreva("  Caixa fechado com sucesso!\n")
					escreva("  ════════════════════════════════════\n")
					pare

				// ═════════════════════════════════════
				// OPÇÃO 4: SAIR DO SISTEMA
				// ═════════════════════════════════════
				caso 4:
					escreva("\n╔══════════════════════════════════════╗\n")
					escreva("║                                      ║\n")
					escreva("║   Sistema encerrado com sucesso!     ║\n")
					escreva("║   Obrigado por usar o PDV Bom Preço  ║\n")
					escreva("║                                      ║\n")
					escreva("╚══════════════════════════════════════╝\n")
					pare

				// ═════════════════════════════════════
				// OPÇÃO INVÁLIDA
				// ═════════════════════════════════════
				caso contrario:
					escreva("\n  ✗ Opção inválida! Por favor, digite 1, 2, 3 ou 4.\n")
					pare
			}
		}
	}
}
