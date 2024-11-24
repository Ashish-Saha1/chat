const httpErrors = require('http-errors');


function notFoundHandler(req,res,next){
    next(createError(401, 'Requested page not found'))
}


function defaultHandler(err,req,res,next){
    res.render('error')
}


module.exports = {
    notFoundHandler,
    defaultHandler
}