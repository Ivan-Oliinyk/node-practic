const { createLogger, transports, format, addColors } = require("winston");

const customFormatWithDate = format.combine(
  format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  format.printf((info) => {
    return `${info.timestamp} [${info.level.toUpperCase().padEnd(5)}] - ${
      info.message
    }`;
  }),
  format.colorize({ all: true })
);

const customFormat = format.combine(
  format.printf((info) => {
    return `[${info.level.toUpperCase().padEnd(5)}] - ${info.message}`;
  }),
  format.colorize({ all: true })
);

const custom = function () {
  const env = process.env.NODE_ENV || "development";
  const isDevelopment = env === "development";

  return isDevelopment ? customFormat : customFormatWithDate;
};

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const colors = {
  error: "red",
  warn: "yellow",
  info: "white",
  http: "magenta",
  debug: "blue",
};

const level = () => {
  const env = process.env.NODE_ENV || "development";
  const isDevelopment = env === "development";
  return isDevelopment ? "debug" : "warn";
};

const logger = createLogger({
  format: custom(),
  level: level(),
  addColors: addColors(colors),

  transports: [
    new transports.Console(),
    new transports.File({ filename: "./logs/warm.log", level: "warm" }),
    new transports.File({ filename: "./logs/error.log", level: "error" }),
  ],
});

module.exports = logger;
