const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
   title: {
      type: String,
      maxlength: [100, 'max 100 chars allowed for task title'],
      minlength: [3, 'min 3 chars required for task title'],
      required: [true, 'task title is required field'],
   },
   description: {
      type: String,
      maxlength: [1000, 'max 1000 chars allowed for task description'],
      minlength: [3, 'min 3 chars allowed for task description'],
      requried: [true, 'task description is required field'],
   },
   thumbnail: {
      type: String,
      required: [true, 'task image is required field'],
   },
   images: [{ type: String }],
});

module.exports = mongoose.model('tasks', TaskSchema);
