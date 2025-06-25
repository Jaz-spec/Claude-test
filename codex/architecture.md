Weather App Architecture
Project Overview
A minimal full-stack weather application designed for educational purposes in an AI workflows workshop. The architecture prioritizes simplicity and clarity over production features.
Monorepo Structure
weather-app-workshop/
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── weather.js
│   ├── data/
│   │   └── weather-data.json
│   ├── utils/
│   │   └── data-helpers.js
│   └── package.json
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css (minimal)
├── package.json (root)
└── README.md
Backend Architecture (Node.js + Express)
Core Components
1. Server Setup (server.js)

Express server initialization
Basic middleware (JSON parsing, CORS)
Route mounting
Error handling middleware
Server startup on configurable port

2. Routes (routes/weather.js)

GET /api/weather - Returns all weather data
GET /api/weather/:location - Returns weather for specific location
GET /api/locations - Returns available locations list

3. Data Layer (data/weather-data.json)

JSON file structure for storing weather data
Contains locations and weather information

4. Utilities (utils/data-helpers.js)

Functions to read JSON data
Data formatting utilities
Basic validation helpers

API Response Format
json{
  "success": true,
  "data": {
    "location": "London",
    "weather": {
      "temperature": 18,
      "humidity": 65,
      "conditions": "Cloudy",
      "windSpeed": 12,
      "lastUpdated": "2025-06-24T10:00:00Z"
    }
  },
  "timestamp": "2025-06-24T12:00:00Z"
}
Error Response Format
json{
  "success": false,
  "error": {
    "message": "Location not found",
    "code": "LOCATION_NOT_FOUND"
  },
  "timestamp": "2025-06-24T12:00:00Z"
}
Frontend Architecture (Vanilla JavaScript)
Core Components
1. HTML Structure (index.html)

Basic HTML5 document with weather data display area

2. JavaScript Logic (script.js)

Fetch weather data from backend API
Display JSON responses in readable format
Basic error handling

3. Minimal Styling (style.css)

Basic layout and JSON formatting styles

Data Flow
User Request → Frontend → API Call → Backend Routes → Data Helpers → JSON File
                    ↓
JSON Response ← Frontend ← API Response ← Backend Routes ← Formatted Data
Error Handling Strategy
Backend Error Handling

Route-level try-catch blocks
File read error handling
Invalid request parameter validation
Global error middleware for unhandled errors

Frontend Error Handling

Network request failure handling
Invalid JSON response handling
User feedback for errors
Graceful degradation when API is unavailable

Development Considerations
Simplicity Guidelines

No authentication/authorization
No database connections
No complex state management
No build processes or bundlers
Minimal dependencies

Educational Focus

Clear, readable code structure
Comments explaining key concepts
Separation of concerns demonstrated
RESTful API principles shown
Basic full-stack communication patterns