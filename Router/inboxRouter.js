const express = require('express');
const router = express.Router();
const { getInbox } = require('../Controller/inboxController')
const decorateHtmlResponse = require('../Middleware/Common/decorateHtmlResponse')
const checkLogin = require('../Middleware/Common/checkLogin');

router.get("/",decorateHtmlResponse("Inbox"),checkLogin, getInbox)





module.exports = router;