const mongoose = require('mongoose');
const dotenv = require('dotenv');
const chalk = require('chalk');
const path = require('path');
const app = require('./app');
const logger = require('./logs/console.logger');
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
   logger.info('server running on port ' + PORT);
});
