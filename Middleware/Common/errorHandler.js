const createError = require('http-errors')


function notFoundHandler(req,res,next){
    next(createError(404, 'Requested page not found'))
}


function defaultHandler(err,req,res,next){
    res.locals.error = process.env.NODE_ENV === 'development'? err : {Message: err.message};

    res.status(err.status || 500)

    if(res.locals.html){
        res.render('error',{title: "Error Page"})
    }else{
        res.json({Error: res.locals.error})
    }
  
}



module.exports = {
    notFoundHandler,
    defaultHandler
}