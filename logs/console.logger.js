const path = require('path');
const winston = require('winston');
const { format, createLogger } = winston;

const logger = createLogger({
   transports: [
      new winston.transports.File({
         format: format.combine(format.timestamp(), format.json()),
         filename: path.join(__dirname, 'error.log'),
         level: 'error',
      }),
   ],
});

logger.add(new winston.transports.Console({ format: format.combine(format.colorize(), format.simple()) }));

module.exports = logger;
