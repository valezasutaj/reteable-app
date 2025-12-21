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

  db.get('SELECT COUNT(*) AS count FROM rateables', (err, row) => {
    if (err || row.count > 0) {
      return;
    }
    
    const items = [
      [
        'Quiet mornings are the best',
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
        42
      ],
      [
        'Sunsets never get old',
        'https://images.unsplash.com/photo-1501973801540-537f08ccae7b',
        87
      ],
      [
        'Take the long way',
        null,
        19
      ],
      [
        'Less setup, more focus',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        63
      ],
      [
        'The ocean puts things in perspective',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
        104
      ]
    ];

    items.forEach(item => {
      db.run(
        'INSERT INTO rateables (text, image, likes) VALUES (?, ?, ?)',
        item
      );
    });
  });
});

module.exports = db;
