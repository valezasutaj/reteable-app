const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./rateables.database');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS rateables (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      text TEXT,
      image TEXT,
      likes INTEGER DEFAULT 0
    )
  `);

  db.get("SELECT COUNT(*) as count FROM rateables", (err, row) => {
    if (err) {
      console.error(err);
      return;
    }

    if (row.count === 0) {
      db.run(
        "INSERT INTO rateables (text, image) VALUES (?, ?)",
        ['First test item', null],
        logResult
      );

      db.run(
        "INSERT INTO rateables (text, image) VALUES (?, ?)",
        ['Second test item', null],
        logResult
      );

      db.run(
        "INSERT INTO rateables (text, image) VALUES (?, ?)",
        [
          'Third test item',
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
        ],
        logResult
      );
    }
  });

  function logResult(err) {
    if (err) console.error('INSERT ERROR:', err.message);
    else console.log('Insert OK');
  }

});

module.exports = db;
