# MERN stack Real Estate application

## 1. Overview
https://imotisupernova.onrender.com/

This project is a web application built with React and Vite, Mongo DB, Node, Express. This project also used Prisma, Leaflet, Socket.IO. The project is for an online platform called "SuperNova Real Estate" where users can search, create, update and delete real estate products. The users can save products and message the owner of the product.

## 2. Project Architecture
    The project is organized in a functionality-oriented architecture. Below is an overview of the main directories and files:

    /api - main server folder
        /controllers - responsible for the control of the authorization of the users.
        /lib - responsible for the prisma client. 
        /middleware - responsible for verification of the token of an user.
        /prisma - responsible for the prisma models, which communicate with the data base.
        /routes - responsible for the path of the pages.

    /client - main client folder
        /public - include 'images, which are used for the visual effects of the application.

        /src - source code folder responsible for the functionality of the application.

            /components - contains reusable UI components, which are responsible for different pieces of UI and can be easily managed.

            /contexts - contains two files, which are used to manage and share authentication state across the entire application.

            /lib - contains files, which are coresponding with the server using 'GET', 'POST', 'PUT', 'DELETE' requests.

            App.jsx - the root component, which is responsible for setting up the application's routing, including context providers, and defining 
            the layout structure.

            main.jsx - the entry point of the app, which is responsible for rendering of the root component into the HTML DOM.

    /socket - includes only one app.js file used for communication between backend and frontend responsible for live messaging process.

## 3. installation
    No need installation, becuase it has been deployed on:
    https://imotisupernova.onrender.com/