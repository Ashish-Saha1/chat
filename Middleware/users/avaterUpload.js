

 function avaterUpload(req,res,next){
    const upload = uploader(
        "avaters",
        ['image/jpeg','image/jpg','image/png'],
        1000000,
        'Only Jpeg or Png format is allowed'
    )

}


module.exports = avaterUpload;