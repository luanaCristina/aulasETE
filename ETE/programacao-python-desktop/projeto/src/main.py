"""
Ponto de entrada principal do Sistema de Gestão de Biblioteca.

Este arquivo inicializa a aplicação Tkinter e carrega a interface gráfica.
Execute com: python main.py (dentro da pasta src/)
"""

import sys
import os
import tkinter as tk

# Adicionar o diretório src ao path para imports relativos
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from gui.app import BibliotecaApp


def main():
    """Função principal que inicia a aplicação."""
    root = tk.Tk()
    app = BibliotecaApp(root)
    root.mainloop()


if __name__ == "__main__":
    main()
