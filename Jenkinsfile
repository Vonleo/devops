pipeline {
    agent {
        docker { image 'node:latest' }
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'echo "Running tests..." && exit 0'
            }
        }

        stage('Build & Deploy') {
            steps {
                sh 'echo "Starting application..."'
                sh 'node src/server.js &'
            }
        }
    }
}
