const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const UserSchema = mongoose.Schema({
   username: {
      type: String,
      required: true,
      maxlength: [30, 'max 30 chars allowed for username'],
      minlength: [3, 'minimum 3 chars required for username'],
   },
   password: {
      type: String,
      requried: true,
      maxlength: [500, 'max 500 chars allowed for password'],
   },
});

UserSchema.pre('save', function (next) {
   try {
      const user = this;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(user.password, salt);
      user.password = hash;
      next();
   } catch (err) {
      next(err);
   }
});

module.exports = mongoose.model('users', UserSchema);
