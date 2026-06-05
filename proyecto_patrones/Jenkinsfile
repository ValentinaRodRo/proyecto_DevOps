pipeline {
    agent any

    stages {
        stage('Checkout Repository') {
            steps {
                git branch: 'main',
                url: 'https://github.com/ValentinaRodRo/proyecto_DevOps.git'
            }
        }

        stage('Build Backend Image') {
            steps {
                dir('backend') {
                    sh 'docker build -t valentinarodro/mi-api:v4 .'
                }
            }
        }

        stage('Build Frontend Image') {
            steps {
                dir('frontend') {
                    sh 'docker build -t valentinarodro/frontend:v4 .'
                }
            }
        }

        stage('Push Backend Image') {
            steps {
                sh 'docker push valentinarodro/mi-api:v4'
            }
        }

        stage('Push Frontend Image') {
            steps {
                sh 'docker push valentinarodro/frontend:v4'
            }
        }

        stage('Prepare Kubernetes Deployment') {
            steps {
                echo 'Kubernetes manifests are ready for deployment'
            }
        }
    }
}
