const db = require("../../../dataBase/db");

module.exports = async (req, res) => {
  try {
    const { nickname, text1, text2, text3, summary } = req.body;
    const newReview = await db.query(
      `INSERT INTO review (nickname, text1, text2, text3, summary) values ($1, $2, $3, $4, $5 ) RETURNING *`,
      [nickname, text1, text2, text3, summary]
    );
    res.status(200).json(newReview.rows[0]);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};
