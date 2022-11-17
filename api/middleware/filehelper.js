const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './files');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
    limits: {
        fileSize: 10000000 // max file size 10MB
    }
});

const upload = multer({storage: storage});

module.exports = {upload}