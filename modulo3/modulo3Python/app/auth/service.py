"""Serviço de autenticação: hash, verificação, JWT."""
from datetime import datetime, timedelta
from passlib.context import CryptContext
from jose import jwt, JWTError
from app.config import SECRET_KEY, ALGORITHM, ACCESS_TOKEN_EXPIRE_HOURS

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash_password(password: str) -> str:
    """Gera hash bcrypt da senha."""
    return pwd_context.hash(password)


def verify_password(plain: str, hashed: str) -> bool:
    """Compara senha com hash."""
    return pwd_context.verify(plain, hashed)


def create_access_token(user_id: int) -> str:
    """Gera JWT com expiração."""
    expire = datetime.utcnow() + timedelta(hours=ACCESS_TOKEN_EXPIRE_HOURS)
    payload = {"sub": str(user_id), "exp": expire}
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)


def decode_token(token: str) -> int:
    """Decodifica JWT e retorna user_id. Lança exceção se inválido."""
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id = int(payload.get("sub"))
        return user_id
    except (JWTError, ValueError, TypeError):
        raise ValueError("Token inválido ou expirado.")


def validate_password_strength(password: str) -> list[str]:
    """Valida regras de senha. Retorna lista de erros."""
    errors = []
    if len(password) < 8:
        errors.append("Mínimo 8 caracteres.")
    if not any(c.isupper() for c in password):
        errors.append("Pelo menos 1 letra maiúscula.")
    if not any(c.isdigit() for c in password):
        errors.append("Pelo menos 1 número.")
    if not any(c in "@#$%&!" for c in password):
        errors.append("Pelo menos 1 caractere especial (@#$%&!).")
    return errors
