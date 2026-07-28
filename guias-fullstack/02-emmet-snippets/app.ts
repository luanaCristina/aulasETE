/**
 * app.ts — Módulo TypeScript demonstrando snippets de produtividade
 *
 * Snippets utilizados:
 * - intf  → interface
 * - enum  → enum
 * - afn   → arrow function tipada
 * - cls   → class com constructor
 * - zschema → Zod schema (conceito)
 */

// ============ INTERFACES (snippet: intf) ============

interface Produto {
  id: string;
  nome: string;
  preco: number;
  categoria: Categoria;
  ativo: boolean;
  criadoEm: Date;
}

interface CarrinhoItem {
  produto: Produto;
  quantidade: number;
}

interface ResumoCompra {
  itens: number;
  subtotal: number;
  desconto: number;
  total: number;
}

// ============ ENUMS (snippet: enum) ============

enum Categoria {
  ELETRONICOS = 'eletronicos',
  ROUPAS = 'roupas',
  ALIMENTOS = 'alimentos',
  LIVROS = 'livros',
}

enum StatusPedido {
  PENDENTE = 'pendente',
  CONFIRMADO = 'confirmado',
  ENVIADO = 'enviado',
  ENTREGUE = 'entregue',
  CANCELADO = 'cancelado',
}

// ============ CLASS (snippet: cls) ============

class Carrinho {
  private itens: CarrinhoItem[] = [];

  constructor(private readonly clienteId: string) {}

  adicionar(produto: Produto, quantidade: number = 1): void {
    const existente = this.itens.find((i) => i.produto.id === produto.id);
    if (existente) {
      existente.quantidade += quantidade;
    } else {
      this.itens.push({ produto, quantidade });
    }
  }

  remover(produtoId: string): void {
    this.itens = this.itens.filter((i) => i.produto.id !== produtoId);
  }

  calcularResumo(percentualDesconto: number = 0): ResumoCompra {
    const subtotal = this.itens.reduce(
      (acc, item) => acc + item.produto.preco * item.quantidade,
      0
    );
    const desconto = subtotal * (percentualDesconto / 100);
    return {
      itens: this.itens.length,
      subtotal,
      desconto,
      total: subtotal - desconto,
    };
  }

  listar(): CarrinhoItem[] {
    return [...this.itens];
  }
}

// ============ ARROW FUNCTIONS TIPADAS (snippet: afn) ============

const formatarMoeda = (valor: number): string => {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const filtrarPorCategoria = (produtos: Produto[], categoria: Categoria): Produto[] => {
  return produtos.filter((p) => p.categoria === categoria && p.ativo);
};

const gerarId = (): string => {
  return Math.random().toString(36).substring(2, 11);
};

// ============ DEMONSTRAÇÃO ============

const main = (): void => {
  // Criando produtos
  const produtos: Produto[] = [
    { id: gerarId(), nome: 'Smartphone', preco: 2500, categoria: Categoria.ELETRONICOS, ativo: true, criadoEm: new Date() },
    { id: gerarId(), nome: 'Camiseta Dev', preco: 89.90, categoria: Categoria.ROUPAS, ativo: true, criadoEm: new Date() },
    { id: gerarId(), nome: 'Clean Code', preco: 65, categoria: Categoria.LIVROS, ativo: true, criadoEm: new Date() },
  ];

  // Usando o Carrinho
  const carrinho = new Carrinho('cliente-001');
  carrinho.adicionar(produtos[0], 1);
  carrinho.adicionar(produtos[2], 2);

  const resumo = carrinho.calcularResumo(10);

  console.log('🛒 Resumo do Carrinho:');
  console.log(`   Itens: ${resumo.itens}`);
  console.log(`   Subtotal: ${formatarMoeda(resumo.subtotal)}`);
  console.log(`   Desconto: ${formatarMoeda(resumo.desconto)}`);
  console.log(`   Total: ${formatarMoeda(resumo.total)}`);

  // Filtro por categoria
  const eletronicos = filtrarPorCategoria(produtos, Categoria.ELETRONICOS);
  console.log(`\n📱 Eletrônicos: ${eletronicos.map((p) => p.nome).join(', ')}`);
};

main();
