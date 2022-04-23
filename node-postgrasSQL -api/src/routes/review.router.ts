const Router = require("express");
const router = new Router();
const getAllReviews = require("../controller/review/getAllReviews");
const getOneReview = require("../controller/review/getOneReview");
const createReview = require("../controller/review/createReview");
const updateReview = require("../controller/review/updateReview");
const removeReview = require("../controller/review/removeReview");

router.get("/", getAllReviews);
router.get("/:id", getOneReview);
router.post("/create", createReview);
router.put("/update/:id", updateReview);
router.delete("/remove/:id", removeReview);

module.exports = router;
