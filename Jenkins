pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Start Server') {
            steps {
                sh 'nohup node index.js &'
                // Wait a moment for server to start
                sh 'sleep 5'
            }
        }
        stage('Selenium Test') {
            steps {
                // Run the Selenium test (assumes test file is test.js)
                sh 'npm install selenium-webdriver'
                sh 'node test.js'
            }
        }
    }
    post {
        always {
            // Stop node process after build (cleanup)
            sh "pkill -f 'node index.js' || true"
        }
    }
}
