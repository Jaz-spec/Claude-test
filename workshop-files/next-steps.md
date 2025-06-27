# Next Steps: Weather App Workshop

> The steps created here should be the functional steps needed to build the UI—in sequential order—rather than just a list of intended components.

## Upcoming Tasks (In Order)

1. [ ] **Add a search input for location**
   - Description: Insert an HTML `<input>` and search button into the page so users can type a city or location.
   - Learning goal: Capturing user input via form elements and wiring up event listeners.
   - Dependencies: Basic HTML page structure present in `index.html`.

2. [ ] **Hook up the search input to fetch weather data**
   - Description: Read the input value when the user submits, call the `/api/weather/:location` endpoint, and display the result.
   - Learning goal: Making dynamic fetch requests and updating the DOM with API responses.
   - Dependencies: Task 1 completed (search input added).

## Future Ideas (When Ready)

- [ ] Debounce user typing to avoid excessive API calls
- [ ] Provide search suggestions based on available locations
- [ ] Add error handling UI (e.g. “location not found” messages)

## Blocked/Waiting

- [ ] N/A

## User Requests

- [ ] Build a search input for the weather app
