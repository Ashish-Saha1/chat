const User = require('../Models/people');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createError = require('http-errors');



function getLogin(req,res,next){
    res.render('index')
}


async function login(req,res,next) {
    try {
    const user = await User.findOne({$or:[{mobile:req.body.username}, {email:req.body.email}]});   

    if(user && user._id){
        const isValidPassword = await bcrypt.compare(req.body.password, user.password);

        if(isValidPassword){
            const userObject = {
                username: user.name,
                mobile: user.mobile,
                email: user.email,
                role : 'user',
            }
            //JWT Token
        const token = jwt.sign(userObject, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPAIR});
            //SET cookie
        res.cookie(process.env.COOKIE_NAME, token, {maxAge: process.env.JWT_EXPAIR, httpOnly: true, signed: true});

        // Set local variable
        res.locals.loggedInUser = userObject;
        //render inbox if all are ok
        res.render('inbox')

        }else{
            throw createError('LogIn failed! Please try again')
        }

        }else{
            throw createError('LogIn failed! Please try again')
        }

    } catch (err) {
        res.render('index', {
            data: {
                username : req.body.username
            },
            errors : {
                common : {
                    msg : err.message
                }
            }
        })
    }
}

module.exports = {
    getLogin,
    login
};