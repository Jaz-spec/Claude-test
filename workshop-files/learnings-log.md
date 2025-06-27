# Learning Log

## DOM (Document Object Model)

- **What it is**: A programming interface that represents an HTML document as a structured tree of objects (nodes), allowing JavaScript to access and manipulate elements, attributes, and content dynamically.
- **Why it matters**: It enables interactive and dynamic web pages by letting your scripts read or change the page’s structure, style, and content in response to user actions or data updates.
- **How we used it**: We’ll use DOM methods (e.g., `document.querySelector`, `element.textContent`, `element.appendChild`) in `script.js` to select HTML elements and update them with live weather data fetched from our API.
- **Related concepts**: Nodes and elements, attributes, event listeners, document tree traversal, reflow and repaint.
- **Further exploration**: Investigate event delegation patterns, performance optimizations for frequent DOM updates, and how modern frameworks build on or abstract the DOM (e.g., virtual DOM).

## Form submission & event handling

- **What it is**: Capturing and handling a form’s `submit` event in JavaScript to process user input without a full page reload.
- **Why it matters**: Prevents default browser navigation, enables real-time feedback and dynamic interactions (e.g. search queries) on the client side.
- **How we used it**: In `frontend/script.js`, we added a `submit` listener on `#search-form`, called `event.preventDefault()`, read the trimmed value of `#location-input`, and updated `#weather-data` to show “Searching for …”.
- **Related concepts**: Event listeners, the Event object, `preventDefault()`, input elements, console logging for debugging.
- **Further exploration**: Explore form validation APIs (Constraint Validation), debounce/throttle patterns to limit event firing, and accessibility considerations for form controls.
