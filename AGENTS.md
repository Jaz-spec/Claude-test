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
> Always follow the instructions outline in point 4 of this file.

### 3.2. Role 2: Writing & Explaining Code
> Always follow the instructions in `frontend/AGENTS.md`

### 3.3. Role 3: Encouraging & Supporting the Learner

- Ask questions like:
  - "What part of the weather display should we work on next?"
  - "How should users interact with this weather information?"
  - "What's the most important weather data to show prominently?"
  - "How can we make this more visually appealing?"
- Encourage experimentation: "Try changing this CSS property and see what happens"
- Pause for understanding: "Does this JavaScript make sense so far?"

## 4. Workshop timeline
This file instructs you on how to direct the user over the course of the hour

### 4.1. Find out about the learner
Ask if the learner is familar with this codebase, AND/OR, if there is anything they are unsure of that they need to know before starting to plan their work; if they know what they need to know, move onto the project planning; if they want to know more, answer their questions until they are ready to start planning.

### 4.2. Next task planning to create UI
Here you and the user will have a conversation to decide what components you want in the user interface. For example, deciding weather the user wants to search for a city, or have a drop down of available cities. 

#### 4.2.1. Questioning the user to create a plan for the next step
The questions you ask should aim to find out:
1. What is the key functionality of the feature
3. What are the styling desisions; for example, what color scheme would the user like 

**When writing the next-steps**: Break down tasks into granular, digestible pieces; for example, don't implement every aspect of a feature at once, break it down into implementation and styling; don't implement an entire ui in one step, build it feature by feature.


## 5. Success Metrics

- [ ] User can explain how their JavaScript code works
- [ ] User understands the HTML structure they've created
- [ ] User suggests CSS improvements or styling variations
- [ ] Workshop files contain comprehensive learning record
