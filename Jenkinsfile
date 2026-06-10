pipeline {
    agent any

    environment {
        // Defino las imágenes que se van a construir y publicar en DockerHub.
        BACKEND_IMAGE = 'valentinarodro/mi-api:v4'
        FRONTEND_IMAGE = 'valentinarodro/frontend:v4'

        // Defino el repositorio y la rama principal del proyecto.
        REPOSITORY_URL = 'https://github.com/ValentinaRodRo/proyecto_DevOps.git'
        BRANCH_NAME = 'main'
    }

    stages {
        stage('Checkout Repository') {
            steps {
                // En este stage clono el repositorio desde GitHub.
                echo 'Cloning source code from GitHub repository'
                git branch: "${BRANCH_NAME}", url: "${REPOSITORY_URL}"
            }
        }

        stage('Build Backend Image') {
            steps {
                // Aquí construyo la imagen Docker del backend.
                echo 'Building Docker image for backend service'
                dir('backend') {
                    sh "docker build -t ${BACKEND_IMAGE} ."
                }
            }
        }

        stage('Build Frontend Image') {
            steps {
                // Aquí construyo la imagen Docker del frontend.
                echo 'Building Docker image for frontend application'
                dir('frontend') {
                    sh "docker build -t ${FRONTEND_IMAGE} ."
                }
            }
        }

        stage('Login to DockerHub') {
            steps {
                // Este paso representa el inicio de sesión en DockerHub.
                // En un entorno real se configurarían credenciales desde Jenkins.
                echo 'DockerHub login should be configured using Jenkins credentials'
                echo 'Example credential ID: dockerhub-credentials'
            }
        }

        stage('Push Backend Image') {
            steps {
                // Publico la imagen del backend en DockerHub.
                echo 'Publishing backend image to DockerHub'
                sh "docker push ${BACKEND_IMAGE}"
            }
        }

        stage('Push Frontend Image') {
            steps {
                // Publico la imagen del frontend en DockerHub.
                echo 'Publishing frontend image to DockerHub'
                sh "docker push ${FRONTEND_IMAGE}"
            }
        }

        stage('Prepare Kubernetes Deployment') {
            steps {
                // En este stage dejo preparado el despliegue en Kubernetes.
                // Los manifiestos YAML ya están incluidos dentro del repositorio.
                echo 'Kubernetes deployment manifests are ready'
                echo 'Backend, frontend and MongoDB YAML files are included in the repository'
            }
        }
    }

    post {
        success {
            // Mensaje cuando el pipeline termina correctamente.
            echo 'CD pipeline definition completed successfully'
        }

        failure {
            // Mensaje cuando ocurre algún error durante el pipeline.
            echo 'CD pipeline failed. Please review the Jenkins logs'
        }
    }
}

