const logger = require('../../logs/console.logger');
const LoginServices = require('./services/login.service');
const signupServices = require('./services/signup.service');

class Controllers {
   static async signup(req, res) {
      console.log();
      logger.alert('signup.start');
      let STATUS;
      try {
         const dto = DTO.signupDTO(req.body);
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
         logger.error('signup.failed >>> ' + err);
         return res.status(STATUS || 500).json({ success: false, message: err.message });
      }
   }

   static async login(req, res) {
      console.log();
      logger.alert('login.start');
      let STATUS;

      try {
         const dto = DTO.loginDTO(req.body);

         const user = await LoginServices.findUserByUsername({ username: dto.username });
         if (!user) {
            STATUS = 404;
            throw new Error('user not found');
         }

         const verified = LoginServices.verifyPassword({
            plainTextPassword: dto.password,
            hashedPassword: user.password,
         });

         if (!verified) {
            STATUS = 400;
            throw new Error('password does not match');
         }

         const token = LoginServices.generateToken({ payload: { _id: user._id } });

         return res.status(200).json({ success: true, message: 'login success', token });
      } catch (err) {
         logger.error('login.failed >>> ' + err);
         return res.status(STATUS || 500).json({ success: false, message: err.message });
      }
   }
}

module.exports = Controllers;

class DTO {
   static signupDTO(body) {
      const { username, password } = body;
      return {
         username,
         password,
      };
   }

   static loginDTO(body) {
      const { username, password } = body;
      return {
         username,
         password,
      };
   }
}
