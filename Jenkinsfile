pipeline {
    environment {
        registry = '4creativedev/hello:'
        tag = "${env.BUILD_NUMBER}-DEV"
        HOME = '.'
       
    }
    
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
               sh "docker build -t " + registry + tag + " ."
            }
        }

        stage('Push to Repo') {
            steps {
                sh "docker push " + registry + tag
            }
        }        
    }
}
