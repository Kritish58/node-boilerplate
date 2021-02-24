const multer = require('multer');
const { nanoid } = require('nanoid');
const uploadDirectoryPath = require('../../config/uploadDirectoryPath');

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(uploadDirectoryPath({ foldername: 'tasks' }));
   },
   filename: function (req, file, cb) {
      cb(null, file.fieldname + '___' + nanoid());
   },
});

const upload = multer({
   storage,
   limits: {
      fileSize: 5 * 1024 * 1024,
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
      let STATUS;
      try {
         //* @VALIDATIONS
      } catch (err) {
         return res.status(STATUS || 500).json({ success: false, message: err.message });
      }
   }

   static async createTask(req, res) {
      upload(req, res, function (err) {
         let STATUS;
         try {
            if (err) {
               console.log('errrorr', err);
               // An unknown error occurred when uploading.
               throw new Error(err.message);
            }
            return res.status(200).json({ success: true, message: 'file uploaded' });
         } catch (error) {
            return res.status(STATUS || 500).json({ success: false, message: error.message });
         }
      });
   }

   static async readTask(req, res) {
      let STATUS;
      try {
         //* @VALIDATIONS
      } catch (err) {
         return res.status(STATUS || 500).json({ success: false, message: err.message });
      }
   }

   static async deleteTask(req, res) {
      let STATUS;
      try {
         //* @VALIDATIONS
      } catch (err) {
         return res.status(STATUS || 500).json({ success: false, message: err.message });
      }
   }
}

module.exports = Controllers;
