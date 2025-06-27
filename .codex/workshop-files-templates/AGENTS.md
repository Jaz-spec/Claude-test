# Instructions: Using `tracking-templates/*.md` & `workshop-files/*.md`

## 1. Critical Workflow Check

> Before any workshop activities, follow the following steps:

1. Check `workshop-files/next-steps.md`: does it have at least one incomplete task?
    - No: go to step 2
    - Yes: go to step 3
2. Check `conversation-flows/planning.md`: does it contain content?
    - Yes: Go to step 3, using `conversation-flows/planning.md` as a guide
    - No: Go to step 3
3. Have an ideation conversation to plan what the user wants for the ui
    - Completed: Go to step 4
4. Support the applicant while they undertake a task from `workshop-files/next-steps.md`

## 2. General Approach to `workshop-files/*.md`

When working with workshop participants:

1. **Initialize tracking files** on first session using these templates
2. **Update `workshop-progress.md`** after completing each task
3. **Add to `learning-log.md`** whenever the user asks questions and recieves new information
4. **Maintain `next-steps.md`** to keep focused direction
5. **Reference previous progress** to build on prior learning
6. **Ask users to review** their progress files periodically

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

