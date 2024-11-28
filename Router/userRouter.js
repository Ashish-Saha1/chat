const express = require('express');
const router = express.Router();
const { getUser } = require('../Controller/userController')
const decorateHtmlResponse = require('../Middleware/Common/decorateHtmlResponse')
const avaterUpload = require('../Middleware/users/avaterUpload')
const { addUserValidator } = require("../Middleware/users/userValidator");



router.get("/",decorateHtmlResponse("User"), getUser);

//Add User
router.post('/', avaterUpload, addUserValidator)





module.exports = router;