const db = require('./database');

exports.getRateables = (req, res) => {
  db.all("SELECT * FROM rateables", [], (err, rows) => {
    res.json(rows);
  });
};

exports.likeItem = (req, res) => {
  const { id } = req.body;

  db.run(
    "UPDATE rateables SET likes = likes + 1 WHERE id = ?",
    [id],
    function () {
      res.json({ message: "Liked!" });
    }
  );
};
