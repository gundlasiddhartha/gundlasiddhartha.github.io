# Siddhartha Gundla Portfolio (React + ASP.NET Core)

This repository now hosts a modernized version of the Siddhartha Gundla portfolio built with a React front end and an ASP.NET Core Web API. Both projects are containerized and ready to run locally with Docker or deploy to Azure Container Apps.

## Project structure

```
client/   → React single-page application served by Vite
api/      → ASP.NET Core Web API that surfaces portfolio data and handles contact form submissions
infra/    → Deployment documentation
```

## Getting started locally

### 1. Run with Docker Compose

```bash
docker-compose up --build
```

- React app: <http://localhost:5173>
- Web API: <http://localhost:8080/api/portfolio>

### 2. Run each project individually

#### API

```bash
cd api
# Requires .NET 7 SDK
 dotnet restore
 dotnet run
```

The API listens on `http://localhost:5083` by default.

#### Client

```bash
cd client
npm install
npm run dev
```

The Vite dev server uses the API URL defined in `VITE_API_BASE_URL`.

## Environment variables

| Project | Variable | Description |
|---------|----------|-------------|
| client  | `VITE_API_BASE_URL` | Base URL for API calls (defaults to `http://localhost:8080`). |
| api     | `Cors:AllowedOrigins` | Optional array of origins allowed by CORS. |

## Deployment

Refer to [infra/azure-container-apps.md](infra/azure-container-apps.md) for a step-by-step Azure Container Apps deployment guide.
