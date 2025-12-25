const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./rateables.database');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS rateables (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT,
        image TEXT,
        likes INTEGER DEFAULT 0,
        skips INTEGER DEFAULT 0
        )
    `);

    db.get('SELECT COUNT(*) AS count FROM rateables', (err, row) => {
        if (err) {
            return;
        }

        if (row.count > 0) {
            return;
        }

        const items = [
            ['Cozy work setup', 'https://picsum.photos/seed/workspace1/1200/800'],
            ['Coffee break', 'https://picsum.photos/seed/coffee1/1200/800'],
            ['Minimal desk', 'https://picsum.photos/seed/deskminimal/1200/800'],
            ['Focus mode', 'https://picsum.photos/seed/focusmode/1200/800'],
            ['Morning light', 'https://picsum.photos/seed/morninglight/1200/800'],
            ['City vibes', 'https://picsum.photos/seed/cityvibes/1200/800'],
            ['Nature reset', 'https://picsum.photos/seed/nature1/1200/800'],
            ['Sunset mood', 'https://picsum.photos/seed/sunsetmood/1200/800'],
            ['Plant corner', 'https://picsum.photos/seed/plants1/1200/800'],
            ['Clean aesthetic', 'https://picsum.photos/seed/aesthetic1/1200/800'],

            ['Progress beats perfection.', null],
            ['Small steps add up.', null],
            ['Breathe. Reset. Continue.', null],
            ['Make it simple, then make it good.', null],
            ['Consistency > intensity.', null],
        ];

        items.forEach(([text, image]) => {
            db.run('INSERT INTO rateables (text, image, likes, skips) VALUES (?, ?, ?, ?)', [text, image, 0, 0]);
        });
    });
});

module.exports = db;
