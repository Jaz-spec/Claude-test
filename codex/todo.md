# To-Do List for Weather App Workshop

- [x] Implement `backend/server.js`:
  - [x] Set up Express app with JSON parsing and CORS middleware.
  - [x] Mount weather routes under `/api`.
- [x] Create route definitions in `backend/routes/weather.js`:
  - [x] `GET /api/weather` — return all weather data.
  - [x] `GET /api/weather/:location` — return data for a specific location.
  - [x] `GET /api/locations` — return list of available locations.
- [x] Store sample weather entries in `backend/data/weather-data.json`.
- [x] Implement helper functions in `backend/utils/data-helpers.js` to read/format JSON data.
- [x] Add error handling:
  - [x] Route-level validation and try/catch blocks.
  - [x] Global error middleware in `server.js` for unhandled errors.

## Frontend Implementation

- [ ] Create `frontend/index.html` with a container to display JSON output.
- [ ] Write `frontend/script.js` to fetch data from the backend API and render it.
- [ ] Add minimal styles in `frontend/style.css` for readability.

## Testing & Documentation

- [ ] Verify that the backend server starts and API endpoints respond correctly.
- [ ] Ensure the frontend can fetch and display JSON data without errors.
- [ ] Update README.md with setup and run instructions.

## Finalize Workshop Codebase

- [ ] Clean up code, remove TODO comments, and add explanatory comments where helpful.
- [ ] Ensure code remains simple and educational, avoiding unnecessary complexity.
