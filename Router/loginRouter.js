const express = require('express');
const router = express.Router();
const { getLogin, login } = require('../Controller/loginController')
const decorateHtmlResponse = require('../Middleware/Common/decorateHtmlResponse');
const { doLoginValidator, doLoginValidationHandler } = require("../Middleware/login/loginValidator")

router.get("/", decorateHtmlResponse("Login"), getLogin)

router.post('/',decorateHtmlResponse('Login'),doLoginValidator, doLoginValidationHandler, login)



module.exports = router;