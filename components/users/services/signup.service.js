const UserSchema = require('../schema');

class signupServices {
   static async checkIfEmailExists(email) {
      try {
         const userExists = await UserSchema.findOne({ email });
         return userExists;
      } catch (err) {
         throw new Error(err);
      }
   }

   static async createUser(dto) {
      try {
         await UserSchema.create(dto);
      } catch (err) {
         throw new Error(err);
      }
   }
}

module.exports = signupServices;
