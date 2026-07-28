"""
Interface Gráfica — Sistema de Gestão de Biblioteca.

Aplicação Desktop usando Tkinter com:
- Formulário de cadastro de livros
- Tabela (Treeview) para exibição
- Busca por título
- Operações de editar e excluir
"""

import tkinter as tk
from tkinter import ttk, messagebox
from services import livro_service


class BibliotecaApp:
    """Classe principal da interface gráfica do sistema de biblioteca."""

    def __init__(self, root: tk.Tk):
        """
        Inicializa a aplicação.

        Args:
            root: Janela principal do Tkinter.
        """
        self.root = root
        self.root.title("📚 Sistema de Biblioteca — ETE Pernambuco")
        self.root.geometry("1000x700")
        self.root.resizable(True, True)

        # Variáveis de controle
        self.livro_selecionado_id = None
        self.autores = []
        self.categorias = []

        # Construir interface
        self._criar_frame_formulario()
        self._criar_frame_busca()
        self._criar_frame_tabela()
        self._criar_frame_botoes()

        # Carregar dados iniciais
        self._carregar_combos()
        self._carregar_livros()

    def _criar_frame_formulario(self):
        """Cria o frame com formulário de cadastro."""
        frame = ttk.LabelFrame(self.root, text="📖 Cadastrar / Editar Livro",
                               padding=10)
        frame.pack(fill="x", padx=10, pady=5)

        # Linha 1: Título e ISBN
        ttk.Label(frame, text="Título:").grid(row=0, column=0, sticky="w")
        self.entry_titulo = ttk.Entry(frame, width=40)
        self.entry_titulo.grid(row=0, column=1, padx=5, pady=2)

        ttk.Label(frame, text="ISBN:").grid(row=0, column=2, sticky="w")
        self.entry_isbn = ttk.Entry(frame, width=15)
        self.entry_isbn.grid(row=0, column=3, padx=5, pady=2)

        # Linha 2: Autor e Categoria
        ttk.Label(frame, text="Autor:").grid(row=1, column=0, sticky="w")
        self.combo_autor = ttk.Combobox(frame, width=37, state="readonly")
        self.combo_autor.grid(row=1, column=1, padx=5, pady=2)

        ttk.Label(frame, text="Categoria:").grid(row=1, column=2, sticky="w")
        self.combo_categoria = ttk.Combobox(frame, width=12, state="readonly")
        self.combo_categoria.grid(row=1, column=3, padx=5, pady=2)

        # Linha 3: Ano e Quantidade
        ttk.Label(frame, text="Ano:").grid(row=2, column=0, sticky="w")
        self.entry_ano = ttk.Entry(frame, width=10)
        self.entry_ano.grid(row=2, column=1, padx=5, pady=2, sticky="w")

        ttk.Label(frame, text="Quantidade:").grid(row=2, column=2, sticky="w")
        self.entry_quantidade = ttk.Entry(frame, width=10)
        self.entry_quantidade.grid(row=2, column=3, padx=5, pady=2, sticky="w")

        # Botão Salvar
        self.btn_salvar = ttk.Button(frame, text="💾 Salvar",
                                     command=self._salvar_livro)
        self.btn_salvar.grid(row=2, column=4, padx=10, pady=2)

        # Botão Limpar
        self.btn_limpar = ttk.Button(frame, text="🧹 Limpar",
                                     command=self._limpar_formulario)
        self.btn_limpar.grid(row=2, column=5, padx=5, pady=2)

    def _criar_frame_busca(self):
        """Cria o frame com barra de busca."""
        frame = ttk.Frame(self.root, padding=5)
        frame.pack(fill="x", padx=10, pady=5)

        ttk.Label(frame, text="🔍 Buscar:").pack(side="left")
        self.entry_busca = ttk.Entry(frame, width=40)
        self.entry_busca.pack(side="left", padx=5)
        self.entry_busca.bind("<Return>", lambda e: self._buscar_livros())

        ttk.Button(frame, text="Buscar",
                   command=self._buscar_livros).pack(side="left", padx=5)
        ttk.Button(frame, text="Mostrar Todos",
                   command=self._carregar_livros).pack(side="left")

    def _criar_frame_tabela(self):
        """Cria o frame com a tabela (Treeview) de livros."""
        frame = ttk.Frame(self.root, padding=5)
        frame.pack(fill="both", expand=True, padx=10, pady=5)

        # Definir colunas
        colunas = ("id", "titulo", "autor", "categoria", "isbn", "disponivel")
        self.tree = ttk.Treeview(frame, columns=colunas, show="headings",
                                 selectmode="browse")

        # Configurar cabeçalhos
        self.tree.heading("id", text="ID")
        self.tree.heading("titulo", text="Título")
        self.tree.heading("autor", text="Autor")
        self.tree.heading("categoria", text="Categoria")
        self.tree.heading("isbn", text="ISBN")
        self.tree.heading("disponivel", text="Disponível")

        # Configurar larguras
        self.tree.column("id", width=40, anchor="center")
        self.tree.column("titulo", width=250)
        self.tree.column("autor", width=180)
        self.tree.column("categoria", width=120)
        self.tree.column("isbn", width=120, anchor="center")
        self.tree.column("disponivel", width=80, anchor="center")

        # Scrollbar
        scrollbar = ttk.Scrollbar(frame, orient="vertical",
                                  command=self.tree.yview)
        self.tree.configure(yscrollcommand=scrollbar.set)

        self.tree.pack(side="left", fill="both", expand=True)
        scrollbar.pack(side="right", fill="y")

        # Evento de seleção
        self.tree.bind("<<TreeviewSelect>>", self._ao_selecionar_livro)

    def _criar_frame_botoes(self):
        """Cria o frame com botões de ação."""
        frame = ttk.Frame(self.root, padding=5)
        frame.pack(fill="x", padx=10, pady=5)

        self.btn_editar = ttk.Button(frame, text="✏️ Editar Selecionado",
                                     command=self._editar_livro)
        self.btn_editar.pack(side="left", padx=5)

        self.btn_excluir = ttk.Button(frame, text="🗑️ Excluir Selecionado",
                                      command=self._excluir_livro)
        self.btn_excluir.pack(side="left", padx=5)

        # Label de status
        self.label_status = ttk.Label(frame, text="")
        self.label_status.pack(side="right", padx=10)

    # ==================== Métodos de Dados ====================

    def _carregar_combos(self):
        """Carrega autores e categorias nos comboboxes."""
        try:
            self.autores = livro_service.listar_autores()
            nomes_autores = [a["nome"] for a in self.autores]
            self.combo_autor["values"] = nomes_autores

            self.categorias = livro_service.listar_categorias()
            nomes_categorias = [c["nome"] for c in self.categorias]
            self.combo_categoria["values"] = nomes_categorias
        except Exception as erro:
            messagebox.showerror("Erro", f"Erro ao carregar dados: {erro}")

    def _carregar_livros(self):
        """Carrega todos os livros na Treeview."""
        self.entry_busca.delete(0, tk.END)
        self._atualizar_tabela(livro_service.buscar_livros())

    def _buscar_livros(self):
        """Busca livros pelo filtro digitado."""
        filtro = self.entry_busca.get().strip()
        livros = livro_service.buscar_livros(filtro)
        self._atualizar_tabela(livros)

    def _atualizar_tabela(self, livros: list[dict]):
        """Atualiza a Treeview com a lista de livros fornecida."""
        # Limpar tabela atual
        for item in self.tree.get_children():
            self.tree.delete(item)

        # Inserir novos dados
        for livro in livros:
            self.tree.insert("", "end", values=(
                livro["id"],
                livro["titulo"],
                livro["autor"],
                livro["categoria"],
                livro.get("isbn", ""),
                livro["quantidade_disponivel"]
            ))

        # Atualizar status
        self.label_status.config(
            text=f"📊 {len(livros)} livro(s) encontrado(s)")

    # ==================== Métodos de Ação ====================

    def _salvar_livro(self):
        """Salva ou atualiza um livro baseado no estado atual."""
        try:
            titulo = self.entry_titulo.get()
            isbn = self.entry_isbn.get()
            ano = int(self.entry_ano.get()) if self.entry_ano.get() else 0
            qtd = int(self.entry_quantidade.get()) if self.entry_quantidade.get() else 0

            # Obter IDs do autor e categoria selecionados
            idx_autor = self.combo_autor.current()
            idx_categoria = self.combo_categoria.current()

            if idx_autor < 0:
                messagebox.showwarning("Atenção", "Selecione um autor.")
                return
            if idx_categoria < 0:
                messagebox.showwarning("Atenção", "Selecione uma categoria.")
                return

            autor_id = self.autores[idx_autor]["id"]
            categoria_id = self.categorias[idx_categoria]["id"]

            if self.livro_selecionado_id:
                # Modo edição
                sucesso, msg = livro_service.atualizar_livro(
                    self.livro_selecionado_id, titulo, autor_id,
                    categoria_id, isbn, ano, qtd
                )
            else:
                # Modo cadastro
                sucesso, msg = livro_service.cadastrar_livro(
                    titulo, autor_id, categoria_id, isbn, ano, qtd
                )

            if sucesso:
                messagebox.showinfo("Sucesso", msg)
                self._limpar_formulario()
                self._carregar_livros()
            else:
                messagebox.showwarning("Atenção", msg)

        except ValueError:
            messagebox.showwarning(
                "Atenção", "Ano e Quantidade devem ser números inteiros.")
        except Exception as erro:
            messagebox.showerror("Erro", f"Erro inesperado: {erro}")

    def _ao_selecionar_livro(self, event):
        """Evento disparado ao selecionar um livro na Treeview."""
        selecionados = self.tree.selection()
        if selecionados:
            item = self.tree.item(selecionados[0])
            valores = item["values"]
            self.livro_selecionado_id = valores[0]

    def _editar_livro(self):
        """Carrega dados do livro selecionado no formulário para edição."""
        if not self.livro_selecionado_id:
            messagebox.showwarning("Atenção", "Selecione um livro na tabela.")
            return

        from repositories import livro_repository
        livro = livro_repository.buscar_por_id(self.livro_selecionado_id)

        if livro:
            self._limpar_formulario()
            self.livro_selecionado_id = livro["id"]

            self.entry_titulo.insert(0, livro["titulo"])
            self.entry_isbn.insert(0, livro.get("isbn", ""))
            self.entry_ano.insert(0, str(livro["ano_publicacao"]))
            self.entry_quantidade.insert(0, str(livro["quantidade_total"]))

            # Selecionar autor no combobox
            for i, autor in enumerate(self.autores):
                if autor["id"] == livro["autor_id"]:
                    self.combo_autor.current(i)
                    break

            # Selecionar categoria no combobox
            for i, cat in enumerate(self.categorias):
                if cat["id"] == livro["categoria_id"]:
                    self.combo_categoria.current(i)
                    break

            self.btn_salvar.config(text="💾 Atualizar")

    def _excluir_livro(self):
        """Exclui o livro selecionado após confirmação."""
        if not self.livro_selecionado_id:
            messagebox.showwarning("Atenção", "Selecione um livro na tabela.")
            return

        confirma = messagebox.askyesno(
            "Confirmar Exclusão",
            "Tem certeza que deseja excluir este livro?\n"
            "Esta ação não pode ser desfeita."
        )

        if confirma:
            sucesso, msg = livro_service.remover_livro(
                self.livro_selecionado_id)
            if sucesso:
                messagebox.showinfo("Sucesso", msg)
                self._limpar_formulario()
                self._carregar_livros()
            else:
                messagebox.showwarning("Atenção", msg)

    def _limpar_formulario(self):
        """Limpa todos os campos do formulário."""
        self.livro_selecionado_id = None
        self.entry_titulo.delete(0, tk.END)
        self.entry_isbn.delete(0, tk.END)
        self.entry_ano.delete(0, tk.END)
        self.entry_quantidade.delete(0, tk.END)
        self.combo_autor.set("")
        self.combo_categoria.set("")
        self.btn_salvar.config(text="💾 Salvar")
