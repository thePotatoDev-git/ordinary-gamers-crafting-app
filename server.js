const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config/database');
const homeRoutes = require('./routes/home');
const MongoClient = require('mongodb').MongoClient;
const PORT = 3000;
require('dotenv').config({path: './config/.env'});

//Connect to Mongo from connectDB function in config folder
connectDB();

// // DB string
// let db,
//     dbConnectionStr = process.env.DB_STRING,
//     dbName = 'yakuza-crafting-list'

// // MongoDB connection
// MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
//     .then(client => {
//         console.log(`Connected to ${dbName} Database`)
//         db = client.db(dbName)
//     });

// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Routes
app.use('/', homeRoutes);

// PORT listen
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});