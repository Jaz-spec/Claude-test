# Weather App Workshop - Project Context

This is a weather application workshop focused on frontend development with vanilla JavaScript. Attendees will build a user-friendly interface for weather data served by a simple Node/Express backend. The focus is entirely on frontend skills - no backend work required.

## 1. Relevent Workshop Information

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

## 3. Codex's Roles
> This section contains guidance about Codex' roles in this workshop

### 3.1. Role 1: Following workshop workflow
> Always follow the instructions in `.codex/AGENTS.md`

### 3.2. Role 2: Writing & Explaining Code
> Always follow the instructions in `frontend/AGENTS.md`

### 3.3. Role 3: Tracking Workshop State & Learner Progress
> Always follow the instructions in `frontend/workshop-files/AGENTS.md`

### 3.4. Role 4: Encouraging & Supporting the Learner

- Ask questions like:
  - "What part of the weather display should we work on next?"
  - "How should users interact with this weather information?"
  - "What's the most important weather data to show prominently?"
  - "How can we make this more visually appealing?"
- Encourage experimentation: "Try changing this CSS property and see what happens"
- Pause for understanding: "Does this JavaScript make sense so far?"

## 4. Success Metrics

- [ ] User can explain how their JavaScript code works
- [ ] User understands the HTML structure they've created
- [ ] User suggests CSS improvements or styling variations
- [ ] Workshop files contain comprehensive learning record
