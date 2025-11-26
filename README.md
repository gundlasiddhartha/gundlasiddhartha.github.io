# Siddhartha Gundla Portfolio (React + ASP.NET Core)

This repository now hosts a modernized version of the Siddhartha Gundla portfolio built with a React front end and an ASP.NET Core Web API. Both projects are containerized and ready to run locally with Docker or deploy to Azure Container Apps.

## Project structure

```
client/                    → React single-page application served by Vite
api/                       → ASP.NET Core Web API that surfaces portfolio data and handles contact form submissions
Portfolio.ServiceDefaults/ → .NET Aspire service defaults for OpenTelemetry, health checks, and resilience
Portfolio.AppHost/         → .NET Aspire AppHost for orchestration and dashboard
infra/                     → Deployment documentation
```

## Technology Stack

- **API**: ASP.NET Core on .NET 10 with C# 14
- **Frontend**: React with Vite
- **Monitoring**: .NET Aspire 13 with OpenTelemetry (logging, tracing, metrics)

## Getting started locally

### 1. Run with .NET Aspire (Recommended)

The recommended way to run the application is using .NET Aspire, which provides a dashboard for monitoring and orchestration:

```bash
# Requires .NET 10 SDK
dotnet run --project Portfolio.AppHost
```

This will start:
- The Aspire Dashboard at `https://localhost:17049` (or similar)
- The Portfolio API with OpenTelemetry enabled

### 2. Run with Docker Compose

```bash
docker-compose up --build
```

- React app: <http://localhost:5173>
- Web API: <http://localhost:8080/api/portfolio>

### 3. Run each project individually

#### API

```bash
cd api
# Requires .NET 10 SDK
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

## Monitoring with .NET Aspire

The application includes comprehensive monitoring capabilities via .NET Aspire 13:

- **OpenTelemetry Tracing**: Distributed tracing for HTTP requests
- **OpenTelemetry Metrics**: Runtime and HTTP metrics collection
- **OpenTelemetry Logging**: Structured logging with correlation
- **Health Checks**: `/health` and `/alive` endpoints
- **Aspire Dashboard**: Visual monitoring and diagnostics

To view the Aspire dashboard, run the AppHost project and navigate to the dashboard URL shown in the console output.

## Environment variables

| Project | Variable | Description |
|---------|----------|-------------|
| client  | `VITE_API_BASE_URL` | Base URL for API calls (defaults to `http://localhost:8080`). |
| api     | `Cors:AllowedOrigins` | Optional array of origins allowed by CORS. |
| api     | `OTEL_EXPORTER_OTLP_ENDPOINT` | OpenTelemetry Protocol endpoint for exporting telemetry data. |

## Deployment

Refer to [infra/azure-container-apps.md](infra/azure-container-apps.md) for a step-by-step Azure Container Apps deployment guide.
