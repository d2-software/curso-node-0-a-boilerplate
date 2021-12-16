const path = require("path");
const { createLogger, format, transports } = require("winston");

const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, lb, ts }) => `[${ lb }] - ${ ts } ${ level }: ${ message }`);

const logger = createLogger({
  level: process.env.NODE_ENVIRONMENT === "dev" ? "silly" : "info",
  json: true,
  format: combine(
    format.colorize(),
    label({ label: path.basename(process.mainModule.filename) }),
    timestamp(),
    format.splat(),
    myFormat
  ),
  defaultMeta: { service: "user-service" },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    // new winston.transports.File({ filename: 'error.log', level: 'error' }),
    // new winston.transports.File({ filename: 'combined.log' }),
  ]
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== "production") {
  logger.add(new transports.Console({
    format: format.simple()
  }));
}

logger.stream = {
  write: (msg) => {
    logger.info(msg);
  }
};

module.exports = logger;
