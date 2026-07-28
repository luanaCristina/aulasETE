"""TaskFlow API — FastAPI + JWT + PostgreSQL"""
from fastapi import FastAPI
from app.auth.router import router as auth_router
from app.projects.router import router as projects_router
from app.tasks.router import router as tasks_router

app = FastAPI(title="TaskFlow API", version="1.0.0")

app.include_router(auth_router, prefix="/api/auth", tags=["Auth"])
app.include_router(projects_router, prefix="/api/projects", tags=["Projects"])
app.include_router(tasks_router, prefix="/api/tasks", tags=["Tasks"])


@app.get("/")
def root():
    return {"message": "TaskFlow API — Módulo III Python"}
