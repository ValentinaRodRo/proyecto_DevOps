# Proyecto DevOps - Aplicación Web en Kubernetes

## Tecnologías

- React + Vite
- Node.js + Express
- MongoDB
- Docker
- Kubernetes
- GitHub Actions
- Jenkins

## Pipeline CI

GitHub Actions ejecuta automáticamente:

1. Checkout del código
2. Instalación de dependencias
3. Ejecución de pruebas backend
4. Compilación del frontend

## Pipeline CD

Jenkins define los siguientes stages:

1. Clonar repositorio
2. Construir imagen Docker Backend
3. Construir imagen Docker Frontend
4. Publicar imágenes en Docker Hub
5. Preparar despliegue en Kubernetes

## Arquitectura

Frontend (React)
↓
Backend (Node.js)
↓
MongoDB

Desplegado mediante Kubernetes utilizando Deployments, Services, Ingress, Persistent Volumes y HPA.
