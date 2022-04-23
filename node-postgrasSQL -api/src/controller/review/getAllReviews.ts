const db = require("../../../dataBase/db");

module.exports = async (req, res) => {
  try {
    const reviews = await db.query("SELECT * FROM review");
    res.status(200).json(reviews.rows);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};
