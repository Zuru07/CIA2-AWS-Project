# Automated CI/CD Pipeline on GCP with Jenkins, Docker, and GitHub

## Overview

This repository contains the source code and configuration for a web application automatically built, containerized, tested, and deployed to Google Cloud Platform (GCP) using Jenkins, Docker, and GitHub. Code changes trigger the entire pipeline, drastically reducing manual deployment and enhancing reliability.

## Architecture

- **GitHub:** Source control, triggers via webhook on push
- **Jenkins CI:** Executes build, test, Dockerize, and deployment
- **Docker:** Containerizes the application
- **GCP Artifact Registry:** Stores images
- **GCP Cloud Run / Compute Engine:** Runs deployed containers

## Features

- Automatic build and deployment on committing code.
- Full containerization with Docker.
- Integrated build tools (Maven for Java, npm for Node.js).
- Secure image push to GCP Artifact Registry.
- Zero-downtime deployment to GCP Cloud Run.
- Monitoring and logging using GCP services.
- Email notifications (on pipeline success/failure).

## Prerequisites

- Google Cloud Platform Account (Free Tier Eligible)
- GCP Project with Cloud Run and Artifact Registry enabled.
- Jenkins server (cloud VM, e.g., GCP Compute Engine)
- Docker installed on Jenkins VM
- Maven and/or Node.js installed on Jenkins VM (depending on the app)
- GitHub repository with webhook configured

## Setup Instructions

### 1. Clone the repository
```bash 
git clone https://github.com/<Zuru07>/<Cloud-Deployment-Trial>.git
cd <Cloud-Deployment-Trial>
```

### 2. Jenkins Pipeline Configuration

- Place the `Jenkinsfile` in the repo root.
- Configure Jenkins job to use this repository.
- Ensure credentials for GCP (`gcp-jenkins-sa`) are securely managed in Jenkins.

### 3. Application Build

- For Maven projects: ensure `pom.xml` is present and correct.
- For Node.js projects: ensure `package.json` and `package-lock.json` are present.

### 4. Docker Setup

- Dockerfile should correctly reference build artifacts (`target/*.jar` for Java; `dist/*` for Node.js).
- Example snippet for Dockerfile (Java):

```
FROM openjdk:17-jre-slim
COPY target/your-app.jar /app/app.jar
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
```

- Example snippet for Dockerfile:

```
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
CMD ["node", "app.js"]
```

### 5. GCP Artifact Registry

- Authenticate Jenkins with GCP (Service Account, `gcloud auth configure-docker`)
- Push images via pipeline to Artifact Registry

### 6. Cloud Run Deployment

- Deploy using the latest pushed Docker image

```
gcloud run deploy hello-gcp \
  --image=us-central1-docker.pkg.dev/<GCP_PROJECT>/my-repo/hello-gcp:latest \
  --platform=managed \
  --region=us-central1 \
  --allow-unauthenticated
  ```

## How It Works

1. **Push code to GitHub →** webhook triggers Jenkins pipeline.
2. **Jenkins pulls code, builds, and tests.**
3. **Docker image is built and pushed to GCP Artifact Registry.**
4. **Deployed automatically to GCP Cloud Run.**
5. **Monitoring and notification (email) triggered post-build.**

## Monitoring and Alerts

- Dashboards via GCP Monitoring

## References

- Jenkins Documentation: https://www.jenkins.io/doc/
- Docker Documentation: https://docs.docker.com/
- Google Cloud Run Docs: https://cloud.google.com/run/docs
- GCP Artifact Registry: https://cloud.google.com/artifact-registry/docs

---
