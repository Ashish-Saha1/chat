
const express = require('express');
const dotEnv = require('dotenv').config();
const cookieParser = require('cookie-parser')
const path = require('path');
const mongoose = require('mongoose');
const ejs = require('ejs');
const {notFoundHandler, defaultHandler } = require('./Middleware/errorHandler');

const app = express();

//Mongodb Connection
mongoose.connect(process.env.MONGDB_STRING)
.then(()=>console.log('Mongodb Connected'))
.catch((err)=>console.log(err))



// View engine set
app.set('view engine', 'ejs')

//Static folder
app.use(express.static(path.join(__dirname, "./Public/")))

//parse Data
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser(process.env.COOKIE_SECRET))




//Error Handle Not found
app.use(notFoundHandler)


//Error Handle Default
app.use(defaultHandler)


app.listen(process.env.PORT, ()=>console.log(`Listing on port ${process.env.PORT}`))