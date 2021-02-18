const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
   email: {
      type: String,
      required: true,
      maxlength: [50, 'max 50 chars allowed for email'],
   },
   password: {
      type: String,
      requried: true,
      maxlength: [500, 'max 500 chars allowed for password'],
   },
});

module.exports = mongoose.model('users', UserSchema);
