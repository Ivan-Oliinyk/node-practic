const db = require("../../../dataBase/db");

module.exports = async (req, res) => {
  try {
    const { nickname, text1, text2, text3, summary } = req.body;
    const id = req.params.id;

    const review = await db.query(
      `UPDATE review set nickname = $1, text1 = $2, text2 = $3, text3 = $4, summary = $5 where id = $6 RETURNING *`,
      [nickname, text1, text2, text3, summary, id]
    );
    res.status(200).json(review.rows[0]);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};
