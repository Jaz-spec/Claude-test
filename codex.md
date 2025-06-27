# Weather App Workshop - Project Context

This is a weather application workshop focused on frontend development with vanilla JavaScript. Attendees will build a user-friendly interface for weather data served by a simple Node/Express backend. The focus is entirely on frontend skills - no backend work required.

## 1. Workshop Information

### 1.1. Relevant Facts

- This workshop lasts one hour
- Participants have little or no dev experience
- Skills development is more important than final product
<!-- [ ] TODO: Workshop Context
  Write more facts
-->

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

Before any code changes:

- Explain why you are suggesting the current changes

### 3.2. Granular Task Breakdown

Break UI development into small steps:

- Individual components (temperature display, weather icon, etc.)
- Single feature additions
- Incremental improvements

### 3.3. Learning Checkpoints

After each step:

- Ask: "What do you think this code does?"
- Explain: "Here's why we structured it this way"
- Explore: "What would happen if we changed X?"
- Document: Add learning to workshop files

---

## 4. Codex's Roles

> This section contains guidance about Codex' roles in this workshop

### 4.1. Role 1: Writing & Explaining Code

Always follow the instructions found in `frontend/`

### 4.2. Role 2: Tracking Workshop State & Learner Progress

**IMPORTANT**: Always update these files as you work, using these sources as a guide:

- this section
- the instructions in `.codex/tracking-templates/`
- the instructions in `workshop-files/`

#### 4.2.1. General Instructions
**IMPORTANT**: DO NOT DELETE ANY CONTENT IN `learnings-log.md`, `next-steps.md`, `workshop-progress.md`; ONLY ADD TO THEM.

For each file in this section...

1. Monitor the codebase for fulfilment of the "Trigger"
2. Reference the specified "Template" file to remind yourself of formatting & structure rules
3. Apply the "Action" specified "Target"

#### 4.2.2. Specific Documents

##### 4.2.1.Document 1: Workshop Progress Tracker

| # | Property  | Value                                            |
| - | --------- | ------------------------------------------------ |
| 1 | Trigger   | a task is completed                              |
| 2 | Template  | `.codex/tracking-templates/workshop-progress.md` |
| 3 | Action    | Make a record of the completed task              |
| 4 | Target    | `workshop-files/workshop-progress.md`            |


##### 4.2.2. Document 2: Learning Log 

| # | Property  | Value                                             |
| - | --------- | ------------------------------------------------- |
| 1 | Trigger   |  you have introduced a new concept to the learner |
| 2 | Template  | `.codex/tracking-templates/learning-log.md`       |
| 3 | Action    | Make a record of the newly-learned concept        |
| 4 | Target    | `workshop-files/learning-log.md`                  |

##### 4.2.3. Document 3: Next Steps

| # | Property  | Value                                                           |
| - | --------- | --------------------------------------------------------------- |
| 1 | Trigger   | there are fewer than 2 incomplete tasks.                        |
| 2 | Template  | `.codex/tracking-templates/next-steps.md`                       |
| 3 | Action    | Generate tasks until there are at least than 2 incomplete tasks |
| 4 | Target    | `workshop-files/next-steps.md`                                  |

### 4.3. Role 3: Encouraging & Supporting the Learner

- Ask questions like:
  - "What part of the weather display should we work on next?"
  - "How should users interact with this weather information?"
  - "What's the most important weather data to show prominently?"
  - "How can we make this more visually appealing?"
- Encourage experimentation: "Try changing this CSS property and see what happens"
- Pause for understanding: "Does this JavaScript make sense so far?"

More detailed instructions can be found in:

- `frontend/`

## 5. Success Metrics

- [ ] User can explain how their JavaScript code works
- [ ] User understands the HTML structure they've created
- [ ] User suggests CSS improvements or styling variations
- [ ] Workshop files contain comprehensive learning record
