"""Rotas de autenticação: register e login."""
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from app.auth.service import (
    hash_password, verify_password, create_access_token,
    validate_password_strength
)

router = APIRouter()

# Simulação em memória (aluno deve migrar para PostgreSQL)
fake_db: list[dict] = []


class RegisterRequest(BaseModel):
    name: str
    email: EmailStr
    password: str


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


@router.post("/register", status_code=201)
def register(body: RegisterRequest):
    # Validar senha forte
    erros = validate_password_strength(body.password)
    if erros:
        raise HTTPException(400, detail={"code": "WEAK_PASSWORD", "errors": erros})

    # Verificar email duplicado
    if any(u["email"] == body.email for u in fake_db):
        raise HTTPException(400, detail={"code": "EMAIL_EXISTS", "message": "E-mail já cadastrado."})

    # Criar usuário
    user = {
        "id": len(fake_db) + 1,
        "name": body.name,
        "email": body.email,
        "password_hash": hash_password(body.password),
    }
    fake_db.append(user)

    token = create_access_token(user["id"])
    return {"id": user["id"], "name": user["name"], "email": user["email"], "token": token}


@router.post("/login")
def login(body: LoginRequest):
    user = next((u for u in fake_db if u["email"] == body.email), None)
    if not user or not verify_password(body.password, user["password_hash"]):
        raise HTTPException(401, detail={"code": "INVALID_CREDENTIALS", "message": "E-mail ou senha incorretos."})

    token = create_access_token(user["id"])
    return {"token": token, "user": {"id": user["id"], "name": user["name"]}}
