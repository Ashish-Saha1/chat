const express = require('express');
const router = express.Router();
const { getLogin, login, logOut } = require('../Controller/loginController')
const decorateHtmlResponse = require('../Middleware/Common/decorateHtmlResponse');
const { doLoginValidator, doLoginValidationHandler } = require("../Middleware/login/loginValidator")

const page_title = 'Login'

router.get("/", decorateHtmlResponse(page_title), getLogin)

router.post('/',decorateHtmlResponse(page_title), doLoginValidator, doLoginValidationHandler, login)

router.delete('/', logOut)

module.exports = router;