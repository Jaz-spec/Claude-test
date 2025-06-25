/**
 * Frontend script to fetch weather data from the backend API
 * and display it on the page.
 */
async function fetchWeather() {
  // Request weather data and update the DOM
  try {
    const response = await fetch('/api/weather');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    document.getElementById('weather-data').innerText = JSON.stringify(result, null, 2);
  } catch (error) {
    document.getElementById('weather-data').innerText = 'Error fetching weather data';
    console.error(error);
  }
}

// Fetch weather data when the page loads
window.addEventListener('load', fetchWeather);
