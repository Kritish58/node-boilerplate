const mongoose = require('mongoose');
const dotenv = require('dotenv');
const chalk = require('chalk');
const path = require('path');
const app = require('./app');
dotenv.config({ path: path.join(__dirname, 'config', '.env') });

const { PORT, MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true }, err => {
   if (err) {
      console.log(err);
      process.exit(1);
   }
   console.log(chalk.bold.blue('mongodb connected'));
});

app.listen(PORT, () => {
   console.log(chalk.bold.yellow('server is running on port', PORT));
});
