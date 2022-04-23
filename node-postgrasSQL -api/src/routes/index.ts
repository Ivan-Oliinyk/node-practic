const Router = require("express");
const router = new Router();
const reviewRouter = require("./review.router.ts");

router.use("/review", reviewRouter);

module.exports = router;
