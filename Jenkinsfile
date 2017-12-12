#!/usr/bin/groovy

node {
    stage 'Install'
    checkout scm

    sh 'docker run --rm -v `pwd`:/app:rw -w /app falci/ng npm i'
}

node {
    stage 'Lint'

    sh 'docker run --rm -v `pwd`:/app:rw -w /app falci/ng ng lint'
}

node {
    stage 'Build'

    def ngEnv = 'development'

    if(env.BRANCH_NAME == 'master'){
        ngEnv = 'production'
    }

    sh "docker run --rm -v `pwd`:/app:rw -w /app falci/ng ng build --target=${ngEnv} --base-href=/resident"
}

node {
    stage 'Deploy'
    def www = '/var/www/html/resident'
    def server = 'none'

    if(env.BRANCH_NAME == 'develop'){
        server = 'bl-dev-webapp'
    }
    if(env.BRANCH_NAME == 'master'){
        server = 'bl-qa-webapp'
    }

    if(server != 'none') {
        echo "Deploying files to ${server}"
        sh "scp ./dist/* ${server}:${www}"
    } else {
        echo "Deploy ignored (custom branch)"
    }
}