# 🎓 Módulo IV — Mobile, DevOps & Projeto Integrador (TCC)

## Projeto: "EcoColeta Recife" — App de Coleta de Lixo Eletrônico

> **Disciplina:** Desenvolvimento de Sistemas — ETE Advogado José David Gil Rodrigues  
> **Nível:** Avançado (Projeto Integrador / Capstone)  
> **Duração:** 8 a 12 semanas  
> **Equipe:** 3-5 alunos por grupo

---

## 📖 Contexto do Projeto

O **EcoColeta Recife** é um aplicativo mobile que conecta cidadãos a pontos
de coleta de lixo eletrônico na Região Metropolitana do Recife. O app permite:

- Localizar pontos de coleta próximos via geolocalização
- Agendar retirada de eletrônicos em casa
- Fotografar itens para classificação (câmera nativa)
- Acompanhar histórico de descartes e impacto ambiental
- Gamificação: pontos por descarte correto

---

## 📋 Requisitos de Integração Mobile → Back-End

### Recursos Nativos do Dispositivo

| Recurso | Uso no App | Biblioteca |
|---------|-----------|-----------|
| **Geolocalização** | Buscar pontos de coleta próximos | `expo-location` / `geolocator` |
| **Câmera** | Fotografar item para classificação | `expo-camera` / `image_picker` |
| **Notificações Push** | Lembrete de agendamento | `expo-notifications` / `firebase_messaging` |
| **Mapa** | Exibir pontos de coleta no mapa | `react-native-maps` / `google_maps_flutter` |

### Endpoints da API consumidos pelo Mobile

| Método | Rota | Descrição | Body/Params |
|--------|------|-----------|-------------|
| POST | `/api/auth/register` | Cadastro | `{name, email, password, phone}` |
| POST | `/api/auth/login` | Login → JWT | `{email, password}` |
| GET | `/api/collection-points?lat=X&lng=Y&radius=5` | Pontos próximos | Query params |
| GET | `/api/collection-points/:id` | Detalhe do ponto | — |
| POST | `/api/pickups` | Agendar retirada | `{address, items[], date, photo_url}` |
| GET | `/api/pickups/mine` | Meus agendamentos | Header: Bearer token |
| PATCH | `/api/pickups/:id/cancel` | Cancelar | — |
| POST | `/api/items/classify` | Classificar item (foto) | `multipart/form-data` |
| GET | `/api/users/me/stats` | Estatísticas do usuário | Pontos, descartes |

### Fluxo Mobile → API

```
1. App abre → Solicita permissão de localização
2. Obtém coordenadas GPS do usuário
3. GET /api/collection-points?lat=-8.05&lng=-34.87&radius=5
4. API consulta banco com PostGIS / cálculo de distância
5. Retorna JSON com pontos ordenados por proximidade
6. App renderiza marcadores no mapa
```

---

## 🐳 Docker — Configuração do Ambiente

### Arquitetura dos Containers

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Mobile    │────▶│   API       │────▶│ PostgreSQL  │
│ (Expo/Emul.)│     │ (Container) │     │ (Container) │
│  Port: 19000│     │  Port: 3000 │     │  Port: 5432 │
└─────────────┘     └─────────────┘     └─────────────┘
```

---

## 🔄 CI/CD — GitHub Actions

### Pipeline

```
Push/PR → Lint → Tests → Build → Docker Build → (Deploy staging)
```

---

## 🏆 Rubrica de Avaliação — Apresentação Final

### Critérios (Total: 100 pontos)

| Critério | Pontos | Descrição |
|----------|--------|-----------|
| **Funcionalidade** | 25 | App funciona end-to-end (login, mapa, agendamento) |
| **Integração Mobile↔API** | 20 | Consumo correto de endpoints, auth JWT, recursos nativos |
| **DevOps (Docker + CI)** | 15 | Docker compose funciona, pipeline CI passa |
| **Qualidade de Código** | 15 | Organização, comentários, padrões, sem código morto |
| **Apresentação** | 15 | Clareza, demonstração ao vivo, domínio técnico |
| **Documentação** | 10 | README, diagrama de arquitetura, instruções de setup |

### Detalhamento por Nota

| Faixa | Significado |
|-------|-------------|
| 90-100 | Excelente — app polido, CI/CD completo, apresentação fluida |
| 70-89 | Bom — funcionalidades core ok, pequenas falhas |
| 50-69 | Regular — funciona parcialmente, falta integração |
| < 50 | Insuficiente — não funciona ou não apresentou |

### Formato da Apresentação
- **Duração:** 15-20 minutos por grupo
- **Demo ao vivo** do app no emulador/celular
- **Mostrar pipeline** CI passando no GitHub
- **Rodar docker-compose** ao vivo
- **Perguntas da banca:** 5 minutos

---

## 📁 Versões do Back-End

- `modulo4Python/` — FastAPI + Docker
- `modulo4JavaScript/` — Express + Docker
- `modulo4TypeScript/` — Express + TypeScript + Docker

Todas compartilham os mesmos arquivos Docker e CI/CD.
