# Rateables App

A small full-stack app where users rate items (Like / Skip) and can delete items.

## Features
- View rateable items (image or text)
- Like an item (persists in DB)
- Skip an item (persists in DB)
- Delete an item (removes from DB)
- Filter items: All / Images / Text
- Linting set up for both frontend and backend
- After you **Like**, **Skip**, or **Delete** an item, you **cannot go back** to it in the UI (it is removed from the current feed). Since the list is finite, you will eventually reach **"no more items"**.

## Tech Stack
- **Frontend:** Angular (Signals)
- **Backend:** Node.js + Express
- **Database:** SQLite

---

## Prerequisites
- **Node.js** installed (recommended: LTS)
- **npm** installed

---

## Run the Backend (Node/Express)

1. Open a terminal in the project root
2. Run:

```bash
cd back
npm install
node server.js
```

Backend runs on:
- `http://localhost:3000`

---

## Run the Frontend (Angular)

1. Open a second terminal in the project root
2. Run:

```bash
cd front
npm install
ng serve
```

Frontend runs on:
- `http://localhost:4200`


## Lint

Backend:

```bash
cd back
npm run lint
```

Frontend:

```bash
cd front
npm run lint
```

---

## API Endpoints

Base URL:
- `http://localhost:3000/api`

Endpoints:
- `GET    /rateables`
- `POST   /rateables/:id/like`
- `POST   /rateables/:id/skip`
- `DELETE /rateables/:id`

---

## Notes
- The backend uses a local SQLite database file (`rateables.database`).
- If you change the DB schema and want a fresh start, delete `rateables.database` and restart the backend.
