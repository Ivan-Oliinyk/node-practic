const db = require("../../../dataBase/db");

module.exports = async (req, res) => {
  try {
    const review = await db.query(`DELETE FROM review where id = $1`, [
      req.params.id,
    ]);
    res.status(200).json(review.rows[0]);
  } catch (e) {
    console.log(e);
    res.status(500).json("user remove");
  }
};
