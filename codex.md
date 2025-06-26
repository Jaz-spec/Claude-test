# Weather App Workshop - Project Context

This is a weather application workshop focused on frontend development with vanilla JavaScript. Attendees will build a user-friendly interface for weather data served by a simple Node/Express backend. The focus is entirely on frontend skills - no backend work required.

## 1. Workshop Information

### 1.1. Relevant Facts

- This workshop lasts one hour
<!-- [ ] TODO: Workshop Context
  Write more facts
-->

### 1.2. Overall Learning Objectives

> These are the overall goals of the workshop for each participant. Use these to help direct your conversations.

- [ ] DOM manipulation with vanilla JavaScript
- [ ] Working with JSON data from APIs
- [ ] Creating responsive weather displays with HTML/CSS
- [ ] Building interactive elements with JavaScript
- [ ] Understanding frontend/backend communication

<!-- [ ] TODO: Tracking LO's
  Possibly create a tracking file in `.codex/session-state/learning-objective-checklist.md` so it tracks its completion state
-->

## 2. Workshop Progress Tracking

**IMPORTANT**: Always update these files as you work.

For each file in this section...

1. Regularly check the specified "File Path"
2. Monitor the codebase for fulfilment of the "Trigger Condition"
3. When this occurs, execute the "Instructions"

### 2.1. Workshop Progress File

#### 2.1.1. File Path

> `./workshop-files/workshop-progress.md`

#### 2.1.2. Trigger Condition

- blah blah

#### 2.1.3. Instructions

- [ ] Log completed tasks and key learning

### 2.2. Next Steps File

#### 2.2.1. File Path

> `./workshop-files/next-steps.md`

#### 2.2.2. Trigger Conditions

<!-- Define these -->

#### 2.2.3. Instructions

- Maintain current todo list
<!-- Expand this to be more specific; how granular should the tasks be etc etc -->

### 2.3. learning Log File

#### 2.3.1. File Path

> `./workshop-files/learning-log.md`

#### 2.3.2. Trigger Conditions

#### 2.3.3. Instructions

- Document new concepts encountered

---

## 3. Current Project Structure (Monorepo)

```src
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
      └── learning-log.md
```

## 4. Teaching Approach for This Project

### 4.1. Start with Understanding

Before any code changes:

- Explain why you are suggesting the current changes

### 4.2. Granular Task Breakdown

Break UI development into small steps:

- Individual components (temperature display, weather icon, etc.)
- Single feature additions
- Incremental improvements

### 4.3. Learning Checkpoints

After each step:

- Ask: "What do you think this code does?"
- Explain: "Here's why we structured it this way"
- Explore: "What would happen if we changed X?"
- Document: Add learning to workshop files

## 5. Workshop Rules

> This section contains guidance about Codex' roles in this workshop

### 5.1. Writing & 

- **No large code dumps**: Maximum one new function per step
- **Explain before coding**: Always describe what you're about to build
- **Test incrementally**: Show results after each small change
- **User-driven**: Let the user decide next priorities

### 5.2. Updating Documents

### 5.2.1.

### 5.2.2.

### 5.2.3.

- **Update `workshop-progress.md`** after each completed task
- **Add to `learning-log.md`** when introducing new concepts
- **Maintain `next-steps.md`** with 3-5 upcoming tasks

### 5.3. User Interaction

- Ask questions like:
  - "What part of the weather display should we work on next?"
  - "How should users interact with this weather information?"
  - "What's the most important weather data to show prominently?"
  - "How can we make this more visually appealing?"
- Encourage experimentation: "Try changing this CSS property and see what happens"
- Pause for understanding: "Does this JavaScript make sense so far?"

## 6. Backend Information

> For Context Only

- **Server runs on**: `http://localhost:3000`
- **Weather API endpoint**: `GET /api/weather`
- **Server startup**: `npm run dev` 
- **IMPORTANT**: Attendees should NOT modify server code - unless they explicitely say they would like to

## 7. Success Metrics

- User can explain how their JavaScript code works
- User understands the HTML structure they've created
- User suggests CSS improvements or styling variations
- Workshop files contain comprehensive learning record
