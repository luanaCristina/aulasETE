Aqui está a implementação do **mesmo CRUD do sistema de clientes e pedidos**, mas agora utilizando o **Tkinter** com a extensão **`ttk`** (nativa do Python).

Essa abordagem cria uma **aplicação desktop pura (janela nativa do sistema operacional)**, sem dependência do navegador ou do Streamlit.

---

### 📂 Estrutura de Arquivos Mantida

O módulo de banco de dados (`config/database.py`) e o banco de dados MySQL permanecem **rigorosamente os mesmos**. Vamos criar apenas o arquivo da interface desktop pura:

```text
/sistema_vendas_desktop
  │── config/
  │     └── database.py       <-- Mantido do módulo anterior
  └── app_tkinter.py          <-- Janela Desktop Nativa em Tkinter

```

---

### 💻 Código Completo da Aplicação Desktop Nativa (`app_tkinter.py`)

Crie o arquivo `app_tkinter.py` e execute direto via Python:

```python
# ============================================================================
# SISTEMA DESKTOP NATIVO DE GESTÃO DE CLIENTES (TKINTER + MYSQL)
# ============================================================================

import tkinter as tk
from tkinter import ttk, messagebox
from config.database import obter_conexao

class SistemaClientesApp:
    def __init__(self, root):
        self.root = root
        self.root.title("💻 Sistema Desktop de Gestão de Clientes - Tkinter + MySQL")
        self.root.geometry("850x600")
        self.root.resizable(False, False)

        # Variável para controlar qual cliente está selecionado para edição
        self.cliente_id_selecionado = None

        # Estilo do Tkinter (Tema moderno)
        self.style = ttk.Style()
        self.style.theme_use("clam")

        # Construção dos componentes da janela
        self.criar_formularios()
        self.criar_tabela()
        self.carregar_dados_tabela()

    # ------------------------------------------------------------------------
    # 1. CONSTRUÇÃO DA INTERFACE GRÁFICA (UI)
    # ------------------------------------------------------------------------
    def criar_formularios(self):
        # Frame de Formulário (Entrada de Dados)
        frame_form = ttk.LabelFrame(self.root, text=" Cadastro / Edição de Cliente ", padding=15)
        frame_form.pack(fill="x", padx=15, pady=10)

        # Campos do Formulário
        ttk.Label(frame_form, text="Nome Completo:").grid(row=0, column=0, sticky="w", pady=5)
        self.txt_nome = ttk.Entry(frame_form, width=30)
        self.txt_nome.grid(row=0, column=1, padx=5, pady=5)

        ttk.Label(frame_form, text="E-mail:").grid(row=0, column=2, sticky="w", pady=5, padx=(10, 0))
        self.txt_email = ttk.Entry(frame_form, width=30)
        self.txt_email.grid(row=0, column=3, padx=5, pady=5)

        ttk.Label(frame_form, text="Telefone:").grid(row=1, column=0, sticky="w", pady=5)
        self.txt_telefone = ttk.Entry(frame_form, width=30)
        self.txt_telefone.grid(row=1, column=1, padx=5, pady=5)

        # Frame para Botões de Ação
        frame_botoes = ttk.Frame(frame_form)
        frame_botoes.grid(row=2, column=0, columnspan=4, pady=15)

        self.btn_salvar = ttk.Button(frame_botoes, text="➕ Salvar Novo", command=self.acao_salvar)
        self.btn_salvar.pack(side="left", padx=5)

        self.btn_atualizar = ttk.Button(frame_botoes, text="✏️ Atualizar Selecionado", command=self.acao_atualizar, state="disabled")
        self.btn_atualizar.pack(side="left", padx=5)

        self.btn_excluir = ttk.Button(frame_botoes, text="❌ Excluir Selecionado", command=self.acao_excluir, state="disabled")
        self.btn_excluir.pack(side="left", padx=5)

        self.btn_limpar = ttk.Button(frame_botoes, text="🧹 Limpar Campos", command=self.limpar_campos)
        self.btn_limpar.pack(side="left", padx=5)

    def criar_tabela(self):
        # Frame para a Tabela de Dados (Treeview)
        frame_tabela = ttk.LabelFrame(self.root, text=" Clientes Cadastrados no Banco de Dados ", padding=10)
        frame_tabela.pack(fill="both", expand=True, padx=15, pady=5)

        # Componente Treeview do Tkinter
        colunas = ("id", "nome", "email", "telefone", "data_cadastro")
        self.tabela = ttk.Treeview(frame_tabela, columns=colunas, show="headings", selectmode="browse")

        # Cabeçalhos das colunas
        self.tabela.heading("id", text="ID")
        self.tabela.heading("nome", text="Nome")
        self.tabela.heading("email", text="E-mail")
        self.tabela.heading("telefone", text="Telefone")
        self.tabela.heading("data_cadastro", text="Data Cadastro")

        # Largura das colunas
        self.tabela.column("id", width=40, anchor="center")
        self.tabela.column("nome", width=200)
        self.tabela.column("email", width=220)
        self.tabela.column("telefone", width=120, anchor="center")
        self.tabela.column("data_cadastro", text="Data Cadastro", width=160, anchor="center")

        # Barra de rolagem (Scrollbar)
        scrollbar = ttk.Scrollbar(frame_tabela, orient="vertical", command=self.tabela.yview)
        self.tabela.configure(yscrollcommand=scrollbar.set)

        self.tabela.pack(side="left", fill="both", expand=True)
        scrollbar.pack(side="right", fill="y")

        # Evento de clique da tabela (Selecionar linha)
        self.tabela.bind("<<TreeviewSelect>>", self.ao_selecionar_linha)

    # ------------------------------------------------------------------------
    # 2. OPERAÇÕES DO CRUD NO BANCO DE DADOS MYSQL
    # ------------------------------------------------------------------------
    def carregar_dados_tabela(self):
        """READ: Busca os registros do MySQL e preenche a tabela Tkinter."""
        # Limpa as linhas atuais da tabela
        for item in self.tabela.get_children():
            self.tabela.delete(item)

        conexao = obter_conexao()
        if conexao:
            try:
                cursor = conexao.cursor(dictionary=True)
                cursor.execute("SELECT id, nome, email, telefone, data_cadastro FROM clientes ORDER BY id DESC")
                for registro in cursor.fetchall():
                    # Formata a data para padrão legível
                    data_fmt = registro["data_cadastro"].strftime("%d/%m/%Y %H:%M") if registro["data_cadastro"] else ""
                    self.tabela.insert("", "end", values=(registro["id"], registro["nome"], registro["email"], registro["telefone"], data_fmt))
            finally:
                cursor.close()
                conexao.close()

    def acao_salvar(self):
        """CREATE: Insere um novo registro no banco."""
        nome = self.txt_nome.get().strip()
        email = self.txt_email.get().strip()
        telefone = self.txt_telefone.get().strip()

        if not nome or not email or not telefone:
            messagebox.showwarning("Atenção", "Preencha todos os campos antes de salvar!")
            return

        conexao = obter_conexao()
        if conexao:
            try:
                cursor = conexao.cursor()
                sql = "INSERT INTO clientes (nome, email, telefone) VALUES (%s, %s, %s)"
                cursor.execute(sql, (nome, email, telefone))
                conexao.commit()
                messagebox.showinfo("Sucesso", f"Cliente '{nome}' cadastrado com sucesso!")
                self.limpar_campos()
                self.carregar_dados_tabela()
            except Exception as e:
                messagebox.showerror("Erro no Banco", f"Falha ao cadastrar: {e}")
            finally:
                cursor.close()
                conexao.close()

    def acao_atualizar(self):
        """UPDATE: Atualiza os dados do cliente selecionado no banco."""
        if not self.cliente_id_selecionado:
            return

        nome = self.txt_nome.get().strip()
        email = self.txt_email.get().strip()
        telefone = self.txt_telefone.get().strip()

        conexao = obter_conexao()
        if conexao:
            try:
                cursor = conexao.cursor()
                sql = "UPDATE clientes SET nome = %s, email = %s, telefone = %s WHERE id = %s"
                cursor.execute(sql, (nome, email, telefone, self.cliente_id_selecionado))
                conexao.commit()
                messagebox.showinfo("Sucesso", f"Cliente ID {self.cliente_id_selecionado} atualizado!")
                self.limpar_campos()
                self.carregar_dados_tabela()
            except Exception as e:
                messagebox.showerror("Erro no Banco", f"Falha ao atualizar: {e}")
            finally:
                cursor.close()
                conexao.close()

    def acao_excluir(self):
        """DELETE: Remove o cliente selecionado do banco."""
        if not self.cliente_id_selecionado:
            return

        resposta = messagebox.askyesno("Confirmar Exclusão", f"Tem certeza que deseja EXCLUIR o cliente ID {self.cliente_id_selecionado}?")
        if resposta:
            conexao = obter_conexao()
            if conexao:
                try:
                    cursor = conexao.cursor()
                    sql = "DELETE FROM clientes WHERE id = %s"
                    cursor.execute(sql, (self.cliente_id_selecionado,))
                    conexao.commit()
                    messagebox.showinfo("Sucesso", "Cliente excluído do sistema!")
                    self.limpar_campos()
                    self.carregar_dados_tabela()
                except Exception as e:
                    messagebox.showerror("Erro no Banco", f"Falha ao excluir: {e}")
                finally:
                    cursor.close()
                    conexao.close()

    # ------------------------------------------------------------------------
    # 3. AUXILIARES DE EVENTOS E INTERFACE
    # ------------------------------------------------------------------------
    def ao_selecionar_linha(self, event):
        """Captura os dados da linha clicada na Treeview e joga para os campos."""
        item_selecionado = self.tabela.selection()
        if item_selecionado:
            valores = self.tabela.item(item_selecionado[0], "values")
            self.cliente_id_selecionado = valores[0]

            # Preenche os campos de texto
            self.txt_nome.delete(0, tk.END)
            self.txt_nome.insert(0, valores[1])

            self.txt_email.delete(0, tk.END)
            self.txt_email.insert(0, valores[2])

            self.txt_telefone.delete(0, tk.END)
            self.txt_telefone.insert(0, valores[3])

            # Habilita botões de Edição/Exclusão e desabilita botão de salvar novo
            self.btn_salvar.configure(state="disabled")
            self.btn_atualizar.configure(state="normal")
            self.btn_excluir.configure(state="normal")

    def limpar_campos(self):
        """Reseta a interface para o estado inicial."""
        self.cliente_id_selecionado = None
        self.txt_nome.delete(0, tk.END)
        self.txt_email.delete(0, tk.END)
        self.txt_telefone.delete(0, tk.END)

        self.btn_salvar.configure(state="normal")
        self.btn_atualizar.configure(state="disabled")
        self.btn_excluir.configure(state="disabled")

        # Unselect linha da tabela
        if self.tabela.selection():
            self.tabela.selection_remove(self.tabela.selection())


# ----------------------------------------------------------------------------
# INICIALIZAÇÃO DA APLICAÇÃO DESKTOP
# ----------------------------------------------------------------------------
if __name__ == "__main__":
    root = tk.Tk()
    app = SistemaClientesApp(root)
    root.mainloop() # Loop principal que mantém a janela desktop aberta

```

---

### 🔍 Destaques Técnicos da Solução Tkinter Nativa:

1. **`root.mainloop()`:** É o loop de eventos que mantém a janela aberta no sistema operacional escutando cliques de mouse e teclas ativas.
2. **Componente `ttk.Treeview`:** É o widget ideal para construir tabelas nativas com suporte a colunas, alinhamento e barra de rolagem.
3. **`self.tabela.bind("<<TreeviewSelect>>", ...)`:** Associa o evento de clique do usuário em uma linha da tabela para automaticamente capturar os dados do cliente e preenchê-los nas caixas de texto (`Entry`).
4. **`messagebox`:** Exibe caixas de diálogos nativas do Windows/Linux/macOS para mensagens de confirmação (`askyesno`), alertas e erros.
5. **Acesso Seguro via Tuplas:** As consultas SQL mantêm o uso de `%s` acoplado ao `cursor.execute(sql, (valores,))`, garantindo **100% de proteção contra SQL Injection** exatamente como fizemos no Streamlit.

---

### 🚀 Como Executar

Não precisa instalar nenhuma biblioteca gráfica adicional (o Tkinter vem embutido no instalador oficial do Python). Basta ter o conector `mysql-connector-python` instalado e executar o script no terminal:

```bash
python app_tkinter.py

```

A janela nativa desktop abrirá imediatamente!