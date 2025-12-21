const db = require('./database');

exports.getRateables = (req, res) => {
  db.all("SELECT * FROM rateables", [], function(err, rows) {
    if (!err) {
      res.send(rows);
    }
  });
};

exports.likeItem = (req, res) => {
  const id = req.params.id;

  db.run(
    'UPDATE rateables SET likes = likes + 1 WHERE id = ?', [id],
    function () {
      res.json({ updated: this.changes });
    }
  );
};
