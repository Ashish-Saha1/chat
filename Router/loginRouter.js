const express = require('express');
const router = express.Router();
const loginController = require('../Controller/loginController')


router.get("/", loginController)