# Yakuza Gear Crafting App

For the PlayStation game Yakuza: Like a Dragon.

I created this fullstack app to keep track of crafting materials I needed for crafting weapons and armor in the videogame. Enter the item you want to craft and the materials needed, and the data is stored in a database. Cross off what gear is completed and delete entries no longer needed.

**Link to project:** https://yakuza-crafting-app.herokuapp.com/

![Yakuza Crafting App gif](https://i.imgur.com/YlLfUzk.gif)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Express, Node.js, MongoDB

After learning some backend development, I made this fullstack CRUD app to help further cement what I've learned. The backend consists of Node.js combined with the Express framework and uses MongoDB for the database. The frontend had a form and users can enter what gear item from the game they want to craft, along with the materials needed to make said item. I connected the backend to grab all the values in the form inputs and stored all that information into an object in my MongoDB database. I used EJS to grab my database documents and render them into HTML, presenting the user with all the gear they want to craft and their required materials.
