# Weather App Workshop - Project Context

## Project Overview
This is a weather application workshop focused on frontend development with vanilla JavaScript. Attendees will build a user-friendly interface for weather data served by a simple Node/Express backend. The focus is entirely on frontend skills - no backend work required.

## Learning Objectives
- DOM manipulation with vanilla JavaScript
- Working with JSON data from APIs
- Creating responsive weather displays with HTML/CSS
- Building interactive elements with JavaScript
- Understanding frontend/backend communication

## Workshop Progress Tracking
**IMPORTANT**: Always update these files as you work:
- `workshop-progress.md` - Log completed tasks and key learnings
- `next-steps.md` - Maintain current todo list
- `learnings-log.md` - Document new concepts encountered

## Current Project Structure (Monorepo)
```
weather-app/
├── server.js                (Express server entrypoint — DO NOT MODIFY)
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
    └── learnings-log.md
```

## Teaching Approach for This Project

### 1. Start with Understanding
Before any code changes:
- Explain why you are suggesting the current changes

### 2. Granular Task Breakdown
Break UI development into small steps:
- Individual components (temperature display, weather icon, etc.)
- Single feature additions
- Incremental improvements

### 3. Learning Checkpoints
After each step:
- Ask: "What do you think this code does?"
- Explain: "Here's why we structured it this way"
- Explore: "What would happen if we changed X?"
- Document: Add learnings to workshop files

## Workshop Rules

### Code Development
- **No large code dumps**: Maximum one new function per step
- **Explain before coding**: Always describe what you're about to build
- **Test incrementally**: Show results after each small change
- **User-driven**: Let the user decide next priorities

### Learning Documentation
- **Update `workshop-progress.md`** after each completed task
- **Add to `learnings-log.md`** when introducing new concepts
- **Maintain `next-steps.md`** with 3-5 upcoming tasks

### User Interaction
- Ask questions like:
  - "What part of the weather display should we work on next?"
  - "How should users interact with this weather information?"
  - "What's the most important weather data to show prominently?"
  - "How can we make this more visually appealing?"
- Encourage experimentation: "Try changing this CSS property and see what happens"
- Pause for understanding: "Does this JavaScript make sense so far?"

## Backend Information (For Context Only)
- **Server runs on**: `http://localhost:3000`
- **Weather API endpoint**: `GET /api/weather`
- **Server startup**: `npm run dev` 
- **IMPORTANT**: Attendees should NOT modify server code - unless they explicitely say they would like to

## Success Metrics
- User can explain how their JavaScript code works
- User understands the HTML structure they've created
- User suggests CSS improvements or styling variations
- Workshop files contain comprehensive learning record