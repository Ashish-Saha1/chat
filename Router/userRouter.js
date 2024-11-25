const express = require('express');
const router = express.Router();
const { getUser } = require('../Controller/userController')
const decorateHtmlResponse = require('../Middleware/Common/decorateHtmlResponse')

router.get("/",decorateHtmlResponse("User"), getUser)





module.exports = router;