const express = require('express');
const router = express.Router();
const { getInbox } = require('../Controller/inboxController')
const decorateHtmlResponse = require('../Middleware/Common/decorateHtmlResponse')

router.get("/",decorateHtmlResponse("Inbox"), getInbox)





module.exports = router;