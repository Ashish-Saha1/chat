const multer = require('multer')
const path = require('path')
const createError = require('http-errors');

const uploader = function(
    subfolder_path,
    allowed_file_type,
    max_file_size,
    error_mes
){
    const UPLOADS_FOLDER = `${__dirname}/../public/uploads/${subfolder_path}`;

    const storage = multer.diskStorage({
        destination : (req,res,cb)=>{
            cb(null, UPLOADS_FOLDER)
        },

        filename : (req,file,cb)=>{
            const fileExt = path.extname(file.originalname);
            const fileName = file.originalname
                                .replace(fileExt, "")
                                .toLowerCase()
                                .split(" ")
                                .join("-")
                                + "_"+
                                Date.now()
            cb(null, fileName + fileExt)
        }

})

    const upload = multer.upload({
        storage : storage,

        limits : {
            fileSize : max_file_size
        },

        fileFilter : (req,file,cb)=>{
            if(allowed_file_type.includes(file.mimetype)){
                cb(null, true)
            }else{
                cb(createError(error_mes))
            }
        }

    })


return upload;

}

module.exports = uploader