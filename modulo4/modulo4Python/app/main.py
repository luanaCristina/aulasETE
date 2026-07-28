"""EcoColeta Recife — API FastAPI"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="EcoColeta Recife API", version="1.0.0")

app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])


@app.get("/")
def root():
    return {"app": "EcoColeta Recife", "version": "1.0.0", "stack": "Python/FastAPI"}


@app.get("/api/collection-points")
def list_points(lat: float = -8.05, lng: float = -34.90, radius: float = 5):
    """TODO: Buscar pontos próximos com cálculo de distância."""
    return {"message": "TODO: implementar busca geoespacial", "lat": lat, "lng": lng}


@app.post("/api/pickups")
def create_pickup():
    """TODO: Criar agendamento de coleta."""
    return {"message": "TODO: implementar agendamento"}
