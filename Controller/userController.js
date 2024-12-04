const bcrypt  = require("bcrypt");
const User = require("../Models/people");
const People = require('../Models/people');
const path = require('path');
const {unlink} = require('fs');


//Get user
async function getUser(req,res,next){
    try {
        const users = await People.find()
        res.render('users', {
            users : users
        })
    } catch (error) {
        next(error)
    }
}



//Add user
async function addUser (req,res,next){

    let newUser;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    if(req.files && req.files.length > 0){
        newUser = new User({
            ...req.body,
            avater : req.files[0].filename, // Here filename is contain file name if req.files console kori then u understand
            password : hashedPassword
        })
    }else{
        newUser = new User({
            ...req.body,
            password : hashedPassword
        })
    }

    try {
       const result = await newUser.save();
       res.status(200).json({
        Mess : "user was added successfully"
       })
    } catch (error) {
        res.status(500).json({
            Errors : {
                Common : {
                    Mes : "Unknown errors occured"
                }
            }
           })
    }

  
}



async function removeUser(req,res,next) {
    try {
        const deletedUser = await People.findByIdAndDelete({_id:req.params.id});

        if(deletedUser.avater){
            unlink(
                path.join(__dirname,`/../Public/uploads/avaters/${deletedUser.avater}`),
                (err)=>{
                    if(err) console.log(err);                         
                }
            )
        }else{
            res.status(200).json({message: 'User was deleted successfully'})
        }
    } catch (error) {
        res.status(500).json({
            Errors : {
                Common : {
                    Mes : "Could not delete the user"
                }
            }
           })
    }
}



module.exports = {
    getUser,
    addUser,
    removeUser
};