const db = require("../../../dataBase/db");

module.exports = async (req, res) => {
  try {
    const reviews = await db.query("SELECT * FROM review where id = $1", [
      req.params.id,
    ]);
    res.status(200).json(reviews.rows);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};
