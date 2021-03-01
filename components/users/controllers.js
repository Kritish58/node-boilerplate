const logger = require('../../logs/console.logger');
const sendResponse = require('../../utils/sendResponse');
const LoginServices = require('./services/login.service');
const signupServices = require('./services/signup.service');

class Controllers {
   static async signup(req, res) {
      console.log();
      logger.alert('signup.start');
      try {
         const dto = DTO.signupDTO(req.body);
         //* @VALIDATION */

         //*  @SERVICES
         const userExists = await signupServices.checkifUsernameExists(dto.username);
         if (userExists) {
            sendResponse({ res, success: false, message: 'username already registered', status: 400 });
            return;
         }

         await signupServices.createUser(dto);

         logger.info('signup.success');
         sendResponse({ res, success: true, message: 'user created', status: 201 });
         return;
      } catch (err) {
         logger.error('signup.failed >>> ' + err);
         sendResponse({ res, success: false, message: err.message, status: 500 });
         return;
      }
   }

   static async login(req, res) {
      console.log();
      logger.alert('login.start');

      try {
         const dto = DTO.loginDTO(req.body);

         const user = await LoginServices.findUserByUsername({ username: dto.username });
         if (!user) {
            sendResponse({ res, success: false, message: 'username not found', status: 400 });
            return;
         }

         const verified = LoginServices.verifyPassword({
            plainTextPassword: dto.password,
            hashedPassword: user.password,
         });

         if (!verified) {
            sendResponse({ res, success: false, message: 'password does not match', status: 400 });
            return;
         }

         const token = LoginServices.generateToken({ payload: { _id: user._id } });

         logger.info('login.success');
         sendResponse({ res, success: true, data: { token }, status: 200, message: 'login success' });
         return;
      } catch (err) {
         logger.error('login.failed >>> ' + err);
         sendResponse({ res, success: false, message: err.message, status: 500 });
         return;
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
