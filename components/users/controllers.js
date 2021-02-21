const signupServices = require('./services/signup.service');

class Controllers {
   static async signup(req, res) {
      let STATUS;
      try {
         const dto = req.body;
         //* @VALIDATION */

         //*  @SERVICES
         const userExists = await signupServices.checkifUsernameExists(dto.username);
         if (userExists) {
            STATUS = 400;
            throw new Error('username already registered');
         }

         await signupServices.createUser(dto);

         return res.status(201).json({ success: true, message: 'user created' });
      } catch (err) {
         return res.status(STATUS || 500).json({ success: false, message: err.message });
      }
   }

   static async login(req, res) {
      let STATUS;
      try {
         //* @VALIDATIONS
      } catch (err) {
         return res.status(STATUS || 500).json({ success: false, message: err.message });
      }
   }
}

module.exports = Controllers;
