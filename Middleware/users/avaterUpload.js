const uploader = require('../../Utilities/singleUploader')

 function avaterUpload(req,res,next){
    const upload = uploader(
        "avaters",
        ['image/jpeg','image/jpg','image/png'],
        1000000,
        'Only Jpeg or Png format is allowed'
    )


    // call the middleware function

    upload.any()(req,res, (err)=>{
        if(err){
            res.status(500).json({
                errors : {
                    avater : {
                        msg : err.message
                    }
                }
            })
        }else{
            next()
        }
    })

}


module.exports = avaterUpload;