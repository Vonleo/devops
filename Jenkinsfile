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

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t 4creativedev/hello:${env.BUILD_NUMBER} .'
            }
        }

        stage('Push to Repo') {
            steps {
                sh 'docker push 4creativedev/hello:${env.BUILD_NUMBER}'
            }
        }        
    }
}
