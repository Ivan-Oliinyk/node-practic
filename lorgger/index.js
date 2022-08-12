const { log } = require("winston");
const logger = require("./logger");

logger.info("hello info");
logger.error("hello error");
logger.warn(" hello warn");
logger.debug("hello debug");
logger.http("hello debug");

logger.info(process.env.NODE_ENV);
