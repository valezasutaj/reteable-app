const db = require('./database');

exports.getRateables = (req, res) => {
    db.all("SELECT * FROM rateables", [], 
        function(err, rows) {
            if (!err) {
                res.send(rows);
            }
        }
    );
};

exports.skipItem = (req, res) => {
    const id = req.params.id;

    db.run('UPDATE rateables SET skips = skips + 1 WHERE id = ?', [id],
        function () {
            res.json({ skipped: this.changes });
        }
    );
};

exports.likeItem = (req, res) => {
    const id = req.params.id;

    db.run('UPDATE rateables SET likes = likes + 1 WHERE id = ?', [id],
        function () {
            res.json({ updated: this.changes });
        }
    );
};

exports.deleteItem = (req, res) => {
    const id = req.params.id;

    db.run('DELETE FROM rateables WHERE id = ?', [id],
        function () {
            res.json({ deleted: this.changes });
        }
    );
};