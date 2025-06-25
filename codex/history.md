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
