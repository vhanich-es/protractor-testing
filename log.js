const { createLogger, format, transports } = require('winston');
const { combine, timestamp, prettyPrint } = format;
 
const logger = createLogger({
  format: combine(
    timestamp(),
    prettyPrint()
  ),
  transports: [new transports.File({ filename: 'winston-logger.log' })]
});

module.exports = logger;