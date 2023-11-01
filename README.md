# Web 3 Chronicles

## Table of contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Features](#features)
- [Technology Used](#technology)
- [Azure Services](#Azure_Services)
- [Database Models](#database)
- [Run](#run)
- [Copyright](#Copyright)

## Introduction

Web3 Chronicles is a dynamic web application powered by MongoDB,
Express.js, React, and Node.js. Users can register and create their profiles, complete with user authentication for security.Users can share their insights on Web3, blockchain, and decentralized applications.It allows users to follow their favorite Web3 enthusiasts and stay updated with the latest developments in this space.



## Demo

![Homepage](/screenshots/page1.png)

![Login page](/screenshots/login.png)

![register](/screenshots/register.png)

![postup](/screenshots/postup.png)

![postdown](/screenshots/postdown.png)

![Upload](/screenshots/upload.png)

![MyPost](/screenshots/myposts.png)

![Comment](/screenshots/comment.png)

## Demo Video 
[Demo Video Link](https://drive.google.com/file/d/1iD0961juPHSVRkWZlHrurBJ9J4GkeGXv/view?usp=sharing)


This application is deployed on Azure and can be accessed through the following link:

[Web 3 Chronicles is on Azure](http://web3chronicles.azurewebsites.net/)

## Technology

The main technologies used to build this application are:

- Node.js
- MongoDB
- Express.js
- React.js
- Vite
- Tailwind
- Bootstrap
- JWT

## Azure_Services
Web3Chronicles utilizes several Azure services to ensure seamless deployment, security, and performance:

- Azure App Service: Web app hosting service for building, deploying, and scaling web apps. It supports various programming languages and frameworks, including Node.js for our MERN stack application.

- Azure Key Vault: Securely store and manage sensitive information such as API keys, secrets, and certificates. Key Vault integrates with Azure services and allows you to control access to keys and secrets.

- Azure Monitor Services: Monitor the performance and availability of your application. Azure Monitor provides comprehensive solutions for collecting, analyzing, and acting on telemetry from your cloud and on-premises environments.

## Implementation Of Azure Services

## Azure App Service Used

![App Service 1](/screenshots/AppService/app1.png)

![App Service 2](/screenshots/AppService/app2.png)

![App Service 3](/screenshots/AppService/app3.png)

![App Service 4](/screenshots/AppService/app4.png)

## Azure Key Vault Service Used

![Azure Keyvault 1](/screenshots/keyvault/key1.png)

![Azure Keyvault 2](/screenshots/keyvault/key2.png)

![Azure Keyvault 3](/screenshots/keyvault/key3.png)

![Azure Keyvault 4](/screenshots/keyvault/key4.png)

## Azure Monitor Service Used

![Azure Monitor](/screenshots/Monitor/monitor1.png)

![Azure Monitor](/screenshots/Monitor/monitor2.png)

![Azure Monitor](/screenshots/Monitor/monitor3.png)

## Getting Started
To run this application locally, follow these steps:

- Clone the repository: git clone <repository-url>
- Navigate to the project directory: cd web3chronicles
- Install dependencies: npm install
- Start the development server: npm start
- Open your browser and visit http://localhost:5000 to view the application locally.
Deployment
- The application is deployed on Azure App Service. Continuous integration and deployment (CI/CD) pipelines can be set up to automatically deploy changes to the production environment whenever there are updates to the main branch.

## To deploy the application manually:

- Commit your changes to the main branch.
- Push the changes to your repository.
- Azure App Service will automatically detect the changes and deploy the updated application.
- Monitoring and Security
- Monitoring: Azure Monitor provides detailed insights into the performance and usage of your application. Set up alerts and monitoring rules to proactively respond to issues and ensure optimal performance.

- Security: Azure Key Vault is used to securely store sensitive information. Additionally, Azure AD provides robust identity and access management, ensuring secure authentication and authorization. Regularly update and rotate access keys and secrets stored in Key Vault to enhance security.

## Features

This application has the following features.

Unlogged in users can do the following:

- View all posts.
- View one post's content by clicking on it.
- View post's comments.
- View any user's profile.
- Signup.

In addition to the above points, logged in users can do the following:

- Login or logout.
- Create a new post.
- View/Edit/delete their posts.
- Edit their user profile or password.
- Add a new comment on a post.
- View/Edit/Delete their comments.

## Database

All the models can be found in the models directory created using mongoose.

### User Schema:

- userName (String)
- email (String)
- password (String)
- summary (String)
- imagePath (String)

### Post Schema:

- title (String)
- content (String)
- imagePath (String)
- createdAt (Date)
- createdBy (ObjectID - a reference to the user's table)
- comments (ObjectID - an array of comments on the post)

### Comment Schema:

- content (String)
- createdAt (Date)
- createdBy (ObjectID - a reference to the user's table)

## Run

To run this application (the master branch), you have to set your own environmental variables in the server root folder. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:

- MONGO_URL: this is the connection string of your MongoDB Atlas database.

- SECRET: you can provide any string here, it is used to encrypt the JWT authentication token.
- PORT: you can provide the port number here.
- VITE_URL : you can provide the vite url.
- VITE_IF : provide the images folder address of the web application.

After you've set these environmental variables in the .env file at the root of the server folder, you need to navigate to the root folder and run "npm start" to start the server.
## Copyright

- Copyright 2023 © [Ranjith Kumar](https://github.com/mranjith29)
