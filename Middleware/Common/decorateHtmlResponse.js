
function decorateHtmlResponse(title_name){
    return (req,res,next)=>{
        res.locals.html = true;
        res.locals.title = `${title_name} - ${process.env.APP_NAME}`;
        next()
    }
}



module.exports = decorateHtmlResponse;