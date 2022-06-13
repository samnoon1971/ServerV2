#!/usr/bin/env groovy

pipeline {
    agent any
    environment {
        ANSIBLE_SUDO_PASS = credentials('ansible-sudo-pass-localhost')
    }
    stages {
        stage('Get code from SCM') {
            steps {
                checkout scm
            }
        }

        stage('build') {
            steps {
                sh '''#!/bin/bash
                 echo `Soon to be added`
            '''
            }
        }
        stage('test') {
            steps {
                sh '''#!/bin/bash
                 echo `Soon to be added`
            '''
            }
        }
        stage('deploy') {
            steps {
                sh '''#!/bin/bash
                 ansible -i /etc/ansible/hosts all -a "grep ^root: /etc/shadow"  -b
            '''
            }
            steps {
                sh '''#!/bin/bash
                ansible-playbook /home/jenkins/aero_ansible.yml
            '''
            }
        }
    }
    post {
        failure {
            emailext body: 'Test Message',
    recipientProviders: [developers(), requestor()],
    subject: 'Jenkins Test Build Failed',
    to: 'samnoonabrar@gmail.com'
        }
        success {
            emailext body: 'Test Message',
    recipientProviders: [developers(), requestor()],
    subject: 'Jenkins Test Build Succeeded',
    to: 'samnoonabrar@gmail.com'
        }
    }
}
