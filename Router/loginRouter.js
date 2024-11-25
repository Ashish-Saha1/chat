const express = require('express');
const router = express.Router();
const { getLogin } = require('../Controller/loginController')
const decorateHtmlResponse = require('../Middleware/Common/decorateHtmlResponse')

router.get("/", decorateHtmlResponse("Login"), getLogin)





module.exports = router;