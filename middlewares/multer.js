const multer =require('multer');

/**
 * Multer is used to upload files
 * this will be used to handle img upload to  the "uploads" dir
 * Am usin the disk storaege engine of multer to store file to disk
 * the diskstorage has two option: {destination and filename}
 */

const storage =multer.diskStorage({
    destination:  (req,file, next)=>{
        next(null,'uploads');
    },
    filename:(req,file,next)=>{
        next(null,`${Date.now()}.jpg`);
    },

});
const upload=multer({storage});


module.exports =upload;