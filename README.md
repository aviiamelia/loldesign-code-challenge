Codding challenge

# Coding Chalenge

# repository

-https://github.com/aviiamelia/loldesign-code-challenge

Apllication developed to calcutad a phone account that saves money with each call

## Introduction

This application was developed with intention to be a codding challenge.

# How to install the project dependencies

-Project was developed in reactJs, so you will need
node to run this project.
I reccomend the v16.13.1
which is the one that I used
-If you using linux the cli to install node will be: sudo apt install nodejs
-if you are on windows you have to download the exe file from the website and manually install

- Havin node installed, you will need to be in the root of the project, the same folder which the 'src' folder is located, and then you will use the command: yarn
  or npm install
  This will install all the libraries and dependecies necessary to the application work

# How to use localy

After installing the dependencies, still in the root of the project you will use the command:
yarn start
This will open the project in the 'localhost:3000'

# How to run the tests

-I used an E2E lib to make the tests, its the cypress lib which test the flow of the application automaticly:
yarn test or npm test
-Now for the E2E tests, you will notice a folder called cypress in the root of the project, the tests are there, the path to the test is cypress/integration/products.spec.js
-Now how to run the tests the E2E tests, you will need to be running the aplication with 'yarn start', with that in mind you will use the command 'yarn run cypress open', this will open a screen which you will see the 'integration' folder with all the tests, after that you will just need to click on the file products.spec.js, and the cypress will run the automated tests
