const UserSchema = require('../schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRATION_TIME } = process.env;

class LoginServices {
   static async findUserByUsername({ username }) {
      const user = await UserSchema.findOne({ username });
      return user;
   }

   static verifyPassword({ plainTextPassword, hashedPassword }) {
      const verified = bcrypt.compareSync(plainTextPassword, hashedPassword);
      return verified;
   }

   static generateToken({ payload }) {
      const token = jwt.sign(payload, JWT_SECRET || 'asdf123', { expiresIn: JWT_EXPIRATION_TIME || '365d' });
      return token;
   }
}

module.exports = LoginServices;
