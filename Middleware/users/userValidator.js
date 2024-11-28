const { check } = require('express-validator');
const User = require('../../Models/people');
const createError = require('http-errors')

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



module.exports = {
    addUserValidator
}
