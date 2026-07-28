# Módulo III Python — TaskFlow API (FastAPI)

```bash
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload  # http://localhost:8000
pytest                         # Rodar testes
```

## Estrutura
```
modulo3Python/
├── app/
│   ├── main.py           ← FastAPI app
│   ├── config.py         ← Settings + DB
│   ├── auth/
│   │   ├── router.py     ← POST /register, /login
│   │   ├── service.py    ← hash, verify, jwt
│   │   └── dependencies.py ← get_current_user
│   ├── projects/
│   │   ├── router.py     ← CRUD projetos
│   │   └── schemas.py
│   ├── tasks/
│   │   ├── router.py     ← CRUD + move
│   │   ├── schemas.py
│   │   └── service.py    ← Regras de transição
│   └── models.py         ← Pydantic models
├── tests/
│   ├── test_auth.py
│   ├── test_tasks.py
│   └── conftest.py
├── security_challenge/
│   ├── vulnerable_code.py   ← Código com falhas
│   └── INSTRUCTIONS.md      ← Desafio para o aluno
└── requirements.txt
```
