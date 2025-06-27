# Weather App Workshop - Project Context

This is a weather application workshop focused on frontend development with vanilla JavaScript. Attendees will build a user-friendly interface for weather data served by a simple Node/Express backend. The focus is entirely on frontend skills - no backend work required.

## 1. Workshop Information

### 1.1. Relevant Facts

- This workshop lasts one hour
- Participants have little or no dev experience
- Skills development is more important than final product

---

## 2. Current Project Structure (Monorepo)

```src
  weather-app/
  ├── server.js                (Express server entrypoint — DO NOT MODIFY)
  ├── api-tests.http           (HTTP test file with comprehensive tests for all weather API endpoints)
  ├── backend/                 (API implementation for context only)
  │   ├── data/
  │   │   └── weather-data.json   (Weather data source)
  │   ├── utils/
  │   │   └── data-helpers.js     (Helper functions for reading data)
  │   └── routes/
  │       └── weather.js          (Weather API route definitions)
  ├── frontend/                (THIS IS WHERE ATTENDEES WORK)
  │   ├── index.html
  │   ├── style.css
  │   └── script.js
  └── workshop-files/          (Progress tracking)
      ├── workshop-progress.md
      ├── next-steps.md
      └── learning-log.md
```

---

## 3. Codex's Teaching Approach

### 3.1. Start with Understanding
Before any code changes: Explain why you are suggesting the current changes

### 3.2. Granular Task Breakdown
Break UI development into small steps:

- Individual components (temperature display, weather icon, etc.)
- Single feature additions
- Incremental improvements

### 3.3. Learning Checkpoints
After each step: Ask if there is anything the user doesn't understand or wants clarifying 

---

## 4. Codex's Roles
> This section contains guidance about Codex' roles in this workshop

### 4.1. Role 1: Writing & Explaining Code
Always follow the instructions found in `frontend/`

### 4.2. Role 2: Tracking Workshop State & Learner Progress
Refer to `.codex/workshop-files-templates` for more details

## 5. Success Metrics

- [ ] User can explain how their JavaScript code works
- [ ] User understands the HTML structure they've created
- [ ] User suggests CSS improvements or styling variations
- [ ] Workshop files contain comprehensive learning record
