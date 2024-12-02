const { check, validationResult } = require('express-validator');
const User = require('../../Models/people');
const createError = require('http-errors');
const path = require('path');
const { unlink } = require('fs');





const addUserValidator = [
    check("name")
    .isLength({min:1})
    .withMessage("Name is Required")
    .isAlpha('en-US', {ignore: ' -'})
    .withMessage('Only contains Alphabet')
    .trim(),

    check("email")
    .isEmail()
    .withMessage('Invalid Email address')
    .trim()
    .custom(async (value)=>{
        try{
            const user = await User.findOne({email : value });
            if(user){
                throw createError('Email already exist')   
        }
        }
        catch(err){
            throw createError(err.message)
        }
    }),

    check("mobile")
    .isMobilePhone('bn-BD', {strictMode : true})
    .withMessage('Must contail a valid Bangladeshi mobile number')
    .custom(async (value)=>{
        try{
            const user = await User.findOne({mobile : value });
            if(user){
                throw createError('Mobile already in use')   
        }
        }
        catch(err){
            throw createError(err.message)
        }
    }),

    check("password")
    .isStrongPassword()
    .withMessage("Password is not strong enough & must be 8 character")
    



]


const addUserValidationHandler = (req,res,next)=>{
    const errors = validationResult(req);
    const mappedErrors = errors.mapped();
    if(Object.keys(mappedErrors).length === 0){
        next()
    }else{
        if(req.files.length > 0){
            const { filename } = req.files[0];
            unlink(
                //path.join(__dirname, `/Public/uploads/avatars/${filename}`),
                path.join(__dirname, `../../Public/uploads/avaters/${filename}`),
                (err)=>{
                    if(err) console.log(err);                         
                }
            )
        }
     res.status(500).json({
        errors : mappedErrors
     })   
    }
}


module.exports = {
    addUserValidator,
    addUserValidationHandler
}
