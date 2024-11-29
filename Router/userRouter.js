const express = require('express');
const router = express.Router();
const { getUser,addUser } = require('../Controller/userController')
const decorateHtmlResponse = require('../Middleware/Common/decorateHtmlResponse')
const avaterUpload = require('../Middleware/users/avaterUpload')
const { addUserValidator, addUserValidationHandler } = require("../Middleware/users/userValidator");



router.get("/",decorateHtmlResponse("User"), getUser);

//Add User
router.post('/', avaterUpload, addUserValidator, addUserValidationHandler, addUser)





module.exports = router;