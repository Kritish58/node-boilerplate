const validator = require('validator');
const signupServices = require('./services/signup.service');

class Controllers {
   static async signup(req, res) {
      let STATUS;
      try {
         const dto = req.body;

         //* @VALIDATION
         const validEmail = validator.isEmail(dto.email);
         if (!validEmail) {
            STATUS = 400;
            throw new Error('invalid email');
         }
         //* @SERVICES
         const userExists = await signupServices.checkIfEmailExists(dto.email);
         if (userExists) {
            STATUS = 400;
            throw new Error('email already registered');
         }

         await signupServices.createUser(dto);

         return res.status(201).json({ success: true, message: 'user created' });
      } catch (err) {
         return res.status(STATUS || 500).json({ success: false, message: err.message });
      }
   }
   static async login(req, res) {
      try {
         //  const dto = req.body;
      } catch (err) {
         return res.status(400).json({ success: false, message: err.message });
      }
   }
}

module.exports = Controllers;
