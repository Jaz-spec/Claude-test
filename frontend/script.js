async function fetchWeather() {
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

window.addEventListener('load', fetchWeather);
