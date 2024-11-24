const cookieParser = require('cookie-parser');
const express = require('express');
const dotEnv = require('dotenv').config();
const cookieParser = require('cookie-parser')

const app = express();

//parse Data
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser(process.env.COOKIE_SECRET))




//Error Handle Not found
app.use(notFoundHandler)
