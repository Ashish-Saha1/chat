const express = require('express');
const router = express.Router();
const { getUser } = require('../Controller/userController')
const decorateHtmlResponse = require('../Middleware/Common/decorateHtmlResponse')
const avaterUpload = require('../Middleware/users/avaterUpload')



router.get("/",decorateHtmlResponse("User"), getUser);

//Add User
router.post('/', avaterUpload)





module.exports = router;