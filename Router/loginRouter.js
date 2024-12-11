const express = require('express');
const router = express.Router();
const { getLogin, login, logOut } = require('../Controller/loginController')
const decorateHtmlResponse = require('../Middleware/Common/decorateHtmlResponse');
const { doLoginValidator, doLoginValidationHandler } = require("../Middleware/login/loginValidator")

const page_title = 'Login';

// Redirect logged in for checking if cookie has means singed in that can't go login page 
const isCookieAvailable = (req,res,next)=>{
    const cookies = Object.keys(req.signedCookies).length > 0? req.signedCookies: null;
    if(!cookies){
        next()
    }else{
        res.redirect('/inbox')
    }
}

router.get("/", decorateHtmlResponse(page_title),isCookieAvailable, getLogin)

router.post('/',decorateHtmlResponse(page_title), doLoginValidator, doLoginValidationHandler, login)

router.delete('/', logOut)

module.exports = router;