# Azure Container Apps Deployment Guide

This project is split into two containers: a React front end (`client`) and an ASP.NET Core Web API (`api`). The containers can be deployed independently or composed together with Azure Container Apps.

## Prerequisites

- Azure CLI with the [containerapp extension](https://learn.microsoft.com/azure/container-apps/quickstart-azure-cli) installed.
- An Azure Container Registry (ACR) to host container images.
- Docker (or Azure Container Registry Tasks) to build container images.

## 1. Build and push images

```bash
# Variables
RESOURCE_GROUP=my-resource-group
ACR_NAME=myacr

# Log in to ACR
az acr login --name $ACR_NAME

# Build images
az acr build --registry $ACR_NAME --image portfolio-api:latest ./api
az acr build --registry $ACR_NAME --image portfolio-client:latest ./client
```

## 2. Create an Azure Container Apps environment

```bash
LOCATION=eastus
ENVIRONMENT=portfolio-env

az containerapp env create \
  --name $ENVIRONMENT \
  --resource-group $RESOURCE_GROUP \
  --location $LOCATION
```

## 3. Deploy the API container app

```bash
API_NAME=portfolio-api
API_IMAGE=$ACR_NAME.azurecr.io/portfolio-api:latest

az containerapp create \
  --name $API_NAME \
  --resource-group $RESOURCE_GROUP \
  --environment $ENVIRONMENT \
  --image $API_IMAGE \
  --ingress external \
  --target-port 8080 \
  --min-replicas 1 \
  --max-replicas 3 \
  --env-vars ASPNETCORE_ENVIRONMENT=Production
```

Take note of the FQDN emitted by the command; it will be used by the React front end.

## 4. Deploy the front-end container app

```bash
CLIENT_NAME=portfolio-client
CLIENT_IMAGE=$ACR_NAME.azurecr.io/portfolio-client:latest
API_URL=https://<api-app-name>.<region>.azurecontainerapps.io

az containerapp create \
  --name $CLIENT_NAME \
  --resource-group $RESOURCE_GROUP \
  --environment $ENVIRONMENT \
  --image $CLIENT_IMAGE \
  --ingress external \
  --target-port 80 \
  --min-replicas 1 \
  --max-replicas 3 \
  --env-vars VITE_API_BASE_URL=$API_URL
```

After deployment, browse to the client container app FQDN to view the portfolio.

## 5. Continuous deployment tips

- Configure GitHub Actions or Azure DevOps pipelines to run `docker build`/`docker push` commands on every merge to main.
- Use [Revision management](https://learn.microsoft.com/azure/container-apps/revisions) to roll out updates safely.
- Add monitoring via [Azure Monitor](https://learn.microsoft.com/azure/container-apps/monitor) for observability.
