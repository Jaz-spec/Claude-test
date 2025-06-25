# Weather App Workshop

This is a minimal full-stack weather application built with Node.js (Express) and vanilla JavaScript. It is designed for educational purposes to demonstrate core full-stack concepts without unnecessary complexity.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

Install the project dependencies:

```bash
npm install
```

## Running the Application

Start the server:

```bash
npm start
```

By default, the server will start at `http://localhost:3000`. To use a different port, set the `PORT` environment variable:

```bash
export PORT=4000
npm start
```

## Usage

Open your browser and navigate to:

```
http://localhost:3000
```

The frontend will load and display weather data fetched from the backend API.

## API Endpoints

- `GET /api/weather` — Returns all weather data.
- `GET /api/weather/:location` — Returns weather data for a specific location.
- `GET /api/locations` — Returns a list of available locations.
