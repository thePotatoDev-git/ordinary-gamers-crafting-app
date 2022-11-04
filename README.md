# Ordinary Gamers Gear Crafting App

Created for Ordinary Gamers, an app for various video games with gear crafting features.

I created this fullstack app to keep track of crafting materials I needed for crafting weapons and armor in videogames. Enter the item you want to craft and the materials needed, and the data is stored in a database. Cross off what gear is completed and delete entries no longer needed.

**Link to project:** https://og-crafting-app.herokuapp.com/

![Gear Crafting App gif](https://i.imgur.com/YlLfUzk.gif)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Express, Node.js, MongoDB

After learning some backend development, I made this fullstack CRUD app to help further cement what I've learned. The backend consists of Node.js combined with the Express framework and uses MongoDB for the database. The frontend had a form and users can enter what gear item from the game they want to craft, along with the materials needed to make said item. I connected the backend to grab all the values in the form inputs and stored all that information into an object in my MongoDB database. I used EJS to grab my database documents and render them into HTML, presenting the user with all the gear they want to craft and their required materials.

## Optimizations

When I initially created this project, I didn't use an architecture and just put all my Get, Post, Put, and Delete requests in one file. After learning about the MVC (Model-View-Controller) architecture, I converted my project to use MVC practices. I used Mongoose Schemas for the Model, put my EJS files in a separate Views folder, and separated my CRUD functions into Controllers. This helped keep my code more organized and clean.

## Lessons Learned:

With this application, I learned how to create routes to connect all my backend code. I also learned how to connect a database to my applications using MongoDB. By connecting my backend code to my frontend code, I was able to create a working fullstack application.
