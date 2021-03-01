const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const app = require('./app');
const logger = require('./logs/console.logger');
dotenv.config({ path: path.join(__dirname, 'config', '.env') });

const { PORT, MONGODB_URI } = process.env;

logger.info('connecting mongodb...');
mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true }, err => {
   if (err) {
      logger.error('mongodb.connect.failed >>> ' + err);
      process.exit(1);
   }
   logger.info('mongodb connected');
});

app.listen(PORT, () => {
   logger.info('server running on port ' + PORT);
});
