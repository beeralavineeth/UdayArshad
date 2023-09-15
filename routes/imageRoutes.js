const express = require('express')
const { default: mongoose } = require('mongoose')
const multer = require('multer');

const useraccess = require("../middlewares/useraccess")
const adminaccess = require("../middlewares/adminaccess")
const router = express.Router()


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });

  const upload = multer({ storage: storage });
  
  router.post('/imagesUpload', upload.single('image'), async (req, res, next) => {
    try {
      if (!req.file) {
        return res.status(400).send('No file uploaded.');
      }
      console.log('Image uploaded:', req.file);
  
      return res.status(200).send('Image uploaded successfully.');
    } catch (error) {
      console.error(error);
      return res.status(500).send('Something went wrong while uploading the image.');
    }
  });


module.exports = router