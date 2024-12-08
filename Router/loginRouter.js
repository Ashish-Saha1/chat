const express = require('express');
const router = express.Router();
const { getLogin, login } = require('../Controller/loginController')
const decorateHtmlResponse = require('../Middleware/Common/decorateHtmlResponse')

router.get("/", decorateHtmlResponse("Login"), getLogin)

router.post('/', login)



module.exports = router;