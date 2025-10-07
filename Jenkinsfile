pipeline {
    agent any

    environment {
        PROJECT_DIR = 'novastore-react'      // Directory of your Vite project
        BUILD_DIR = 'dist'                   // Vite outputs to dist/
        DEPLOY_DIR = '/var/www/html'         // Shared volume with Nginx
    }

    stages {
        stage('Checkout Code') {
            steps {
                dir("${PROJECT_DIR}") {
                    checkout scm
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                dir("${PROJECT_DIR}") {
                    sh 'npm install'
                }
            }
        }

        stage('Build Project') {
            steps {
                dir("${PROJECT_DIR}") {
                    sh 'npm run build'
                }
            }
        }

        stage('Archive Build Artifacts') {
            steps {
                archiveArtifacts artifacts: "${PROJECT_DIR}/${BUILD_DIR}/**", fingerprint: true
            }
        }

        stage('Deploy to Nginx') {
            steps {
                echo "Deploying to Nginx..."
                sh """
                    rm -rf ${DEPLOY_DIR}/*
                    cp -r ${PROJECT_DIR}/${BUILD_DIR}/* ${DEPLOY_DIR}/
                """
            }
        }
    }

    post {
        success {
            echo "✅ Deployed Successfully!"
        }
        failure {
            echo "❌ Build or Deployment Failed."
        }
    }
}
