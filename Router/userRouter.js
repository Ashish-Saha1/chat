const express = require('express');
const router = express.Router();
const { getUser,addUser, removeUser } = require('../Controller/userController')
const decorateHtmlResponse = require('../Middleware/Common/decorateHtmlResponse')
const avaterUpload = require('../Middleware/users/avaterUpload')
const { addUserValidator, addUserValidationHandler } = require("../Middleware/users/userValidator");
const checkLogin = require('../Middleware/Common/checkLogin')


router.get("/",decorateHtmlResponse("User"),checkLogin, getUser);

//Add User
router.post('/', avaterUpload, addUserValidator, addUserValidationHandler, addUser)

router.delete('/:id', removeUser)



module.exports = router;