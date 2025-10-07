# Copilot Repository Instructions

## 🌐 Overview
This repository powers a **personal portfolio and blog website**, built with:
- **Frontend:** React.js (SPA or Vite/CRA-based)
- **Backend:** ASP.NET Core Web API
- **Deployment:** Azure Container Apps or Azure Web App for Containers
- **Registry:** Azure Container Registry (ACR)

The site showcases projects, professional experience, and blog posts with an API-driven architecture.

---

## 🎯 Copilot Goals
Copilot should:
- Help create **clean, modular, and reusable React components**.
- Maintain a **consistent UI theme** with accessibility (WCAG 2.1) in mind.
- Generate **well-structured Web API controllers** that follow RESTful conventions.
- Suggest **integration points** between React frontend and .NET backend (using fetch/axios and CORS-safe patterns).
- Optimize for **containerized deployment** (Dockerfile, multi-stage build, environment variables).
- Ensure code is **secure, performant, and production-ready** for Azure hosting.

---

## 🧱 Tech Stack Summary
| Layer | Technology | Notes |
|-------|-------------|-------|
| Frontend | React.js, TypeScript (optional) | Responsive UI, client-side routing |
| Backend | .NET 8 Web API | REST endpoints for projects, blog posts, and contact form |
| Database | Azure SQL / Cosmos DB (optional) | Store blog data if needed |
| Deployment | Azure Container Apps / Web App for Containers | Pulled from ACR |
| CI/CD | GitHub Actions or Azure DevOps | For build and container deploy |

---

## 🤖 Copilot Guidance

### ✅ DO
- Generate functional React components with **hooks and context** where appropriate.
- Use **axios** or **fetch API** for backend calls; encapsulate endpoints in a `services/` folder.
- Suggest **model classes (C#)** and corresponding **DTOs** for strong typing.
- Propose **controller actions** for CRUD endpoints:
  - `/api/projects`
  - `/api/posts`
  - `/api/contact`
- Add **logging and exception handling** with `ILogger` in controllers.
- Generate **Dockerfiles** for both frontend and backend using **multi-stage builds**.
- Configure environment variables for production using `appsettings.json` and `.env` files.
- Propose Azure-specific enhancements (e.g., `WEBSITES_PORT`, health probes, managed identity use).

### 🚫 AVOID
- Hardcoding secrets, connection strings, or credentials.
- Mixing business logic in controllers — suggest service-layer abstractions.
- Suggesting dependencies not in `package.json` or `.csproj`.
- Modifying CI/CD YAMLs without explicit developer instruction.

---

## 🧩 Folder Structure (Preferred)
```
/frontend
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── assets/
│   └── App.jsx
├── public/
└── package.json

/backend
├── Controllers/
├── Models/
├── Services/
├── Program.cs
├── appsettings.json
└── Dockerfile

/docker-compose.yml
/.github/workflows/
```

---

## 🔒 Security & Privacy
- Keep connection strings in `Azure Key Vault` or as GitHub Secrets.
- Use `Managed Identity` for backend access to Azure resources.
- Enable HTTPS redirection and CORS policies for production domains.
- Use minimal permissions for Azure deployments.

---

## 🚀 Deployment Guidelines
1. Build frontend → `npm run build`
2. Publish backend → `dotnet publish -c Release`
3. Containerize both images → push to ACR
4. Deploy via `az containerapp create` or GitHub Actions
5. Set environment variables:
   - `ASPNETCORE_ENVIRONMENT=Production`
   - `REACT_APP_API_BASE_URL=https://<backend-endpoint>`
   - `WEBSITES_PORT=80`

---

## 🧹 Maintenance
- Run `npm run lint` and `dotnet build` before commits.
- Use Conventional Commits (`feat:`, `fix:`, `chore:`).
- Keep branches small and focused on one feature.

---

## 📝 Current State
**Note:** This repository is currently a static HTML portfolio site using Bootstrap and SCSS. The above instructions are for the planned migration to a React + ASP.NET Core architecture. When working on the current codebase:
- The main file is `index.html` with Bootstrap 4 styling
- SCSS files are in `/scss/` and compiled to `/css/bootstrap.css`
- Build command: `npm run compile:sass`
- Keep existing styling and structure intact unless explicitly asked to migrate
