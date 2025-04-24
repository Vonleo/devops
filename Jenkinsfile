pipeline {
    environment {
        registry = '4creativedev/hello:'
        tag = "${env.BUILD_NUMBER}-DEV"
        HOME = '.'
       
    }
    
    agent any

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
                
                withCredentials([usernamePassword(credentialsId: 'jenkins-docker-registry', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh 'docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}'
                    sh "docker push " + registry + tag
                    sh 'docker logout'
                }
            }
        }        
    }
}
