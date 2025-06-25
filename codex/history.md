# History

- **Express server setup** (`backend/server.js`):
  - Initialized Express app with JSON parsing and CORS middleware.
  - Mounted weather routes under `/api`.
  - Added global error-handling middleware.
  - Configured server to listen on `process.env.PORT || 3000`.

- **Stubbed weather routes** (`backend/routes/weather.js`):
  - Created Express `Router` export to avoid startup errors.

- **Backend package configuration** (`backend/package.json`):
  - Added `express` and `cors` dependencies.
  - Added `start` script for `node server.js`.

- **ESM conversion**:
  - Updated `backend/package.json` to enable ESM via `"type": "module"`.
  - Converted `server.js` and `routes/weather.js` to use `import`/`export` syntax.

- **Weather routes implementation** (`backend/routes/weather.js`):
  - Added `GET /api/weather` to return all weather entries.
  - Added `GET /api/weather/:location` to return weather for a specific location.
  - Added `GET /api/locations` to return list of available locations.
  - Wrapped route handlers in try/catch blocks and forwarded errors to global error-handling middleware.

- **Sample data population** (`backend/data/weather-data.json`):
  - Added sample weather entries for London, New York, and Tokyo.

- **Todo list update** (`codex/todo.md`):
  - Marked sample weather entries step as complete.
