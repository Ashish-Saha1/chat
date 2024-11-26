const mongoose = require('mongoose');

const peopleSchema = mongoose.Schema({
    name : {
        type : String,
        required: true,
        trim : true
    },
    email : {
        type : String,
        required: true,
        lowerCase: true,
        trim : true
    },
    mobile : {
        type : String,
        required: true,
    },
    password : {
        type : String,
        required: true,
    },
    avater : {
        type : String
    },
    role : {
        enum : ['admin','user'],
        default : 'user'
    }  

},
{
    timestamps : true
}

);


const People = mongoose.model('People', peopleSchema);

module.exports = people;
