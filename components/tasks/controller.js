const multer = require('multer');
const { nanoid } = require('nanoid');
const path = require('path');
const projectRootDir = require('../../config/projectRootPath');
const send500Response = require('../../utils/send500Response');
const sendResponse = require('../../utils/sendResponse');

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, path.join(projectRootDir(), '/uploads'));
   },
   filename: function (req, file, cb) {
      cb(null, nanoid() + '___' + file.originalname);
   },
});

const upload = multer({
   storage,
   limits: {
      fileSize: 2 * 1024 * 1024,
   },
   fileFilter: function (req, file, cb) {
      if (file.mimetype.includes('jpeg') || file.mimetype.includes('jpg') || file.mimetype.includes('png')) {
         cb(null, true);
      } else {
         cb(null, false);
      }
   },
}).single('image');

class Controllers {
   static async readTasks(req, res) {
      try {
         //* @VALIDATIONS
      } catch (error) {
         send500Response({ res, error });
         return;
      }
   }

   static async createTask(req, res) {
      upload(req, res, function (err) {
         try {
            if (err) {
               console.log('errrorr', err);
               // An unknown error occurred when uploading.
               throw new Error(err.message);
            }
            console.log(req.file);
            sendResponse({ res, success: true, message: 'file uploaded', status: 201 });
            return;
         } catch (error) {
            send500Response({ res, error });
            return;
         }
      });
   }

   static async readTask(req, res) {
      try {
         //* @VALIDATIONS
      } catch (error) {
         send500Response({ res, error });
         return;
      }
   }

   static async deleteTask(req, res) {
      try {
         //* @VALIDATIONS
      } catch (error) {
         send500Response({ res, error });
         return;
      }
   }
}

module.exports = Controllers;
