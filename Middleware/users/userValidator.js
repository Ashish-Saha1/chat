const { check } = require('express-validator');

const addUserValidator = [
    check("name")
    .isLength({min:1})
    .withMessage("Name is Required")
    .isAlpha()



]
