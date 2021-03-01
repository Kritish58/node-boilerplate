const path = require('path');
const winston = require('winston');
const { format, createLogger } = winston;

const customLevels = {
   levels: {
      error: 0,
      alert: 1,
      info: 2,
   },
   colors: {
      error: 'red',
      alert: 'white',
      info: 'magenta',
   },
};

winston.addColors(customLevels.colors);

const logger = createLogger({
   levels: customLevels.levels,
   transports: [
      new winston.transports.File({
         format: format.combine(format.timestamp(), format.json()),
         filename: path.join(__dirname, 'error.log'),
         level: 'alert', //listens to all levels above alert
      }),
   ],
});

logger.add(new winston.transports.Console({ format: format.combine(format.colorize(), format.simple()) }));

module.exports = logger;
