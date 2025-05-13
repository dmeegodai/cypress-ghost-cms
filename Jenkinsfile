pipeline {
    agent any

    environment {
        CYPRESS_BASE_URL = 'https://your-app-url.com'  
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/dmeegodai/cypress-ghost-cms'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }

        stage('Archive Test Results') {
            steps {
                junit 'cypress/results/**/*.xml'  // ✅ Optional, if you generate junit reports
                archiveArtifacts artifacts: 'cypress/screenshots/**', allowEmptyArchive: true
                archiveArtifacts artifacts: 'cypress/videos/**', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
        }
    }
}
