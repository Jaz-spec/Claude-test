/**
 * Utility functions for reading and querying weather data from a JSON file.
 */
import { readFile } from 'fs/promises';
import path from 'path';

const DATA_PATH = path.resolve('backend/data/weather-data.json');

// Internal helper: read and parse JSON data file, throw error on failure.
async function readDataFile() {
  try {
    const content = await readFile(DATA_PATH, 'utf-8');
    return JSON.parse(content);
  } catch (err) {
    err.code = 'DATA_FILE_READ_ERROR';
    throw err;
  }
}

export async function getAllWeather() {
  // Return all weather entries from the data file.
  return readDataFile();
}

export async function getWeatherByLocation(location) {
  // Find a weather entry by location name (case-insensitive).
  const data = await readDataFile();
  const entry = data.find(
    (item) => item.location.toLowerCase() === location.toLowerCase()
  );
  return entry ? entry.weather : null;
}

export async function getAvailableLocations() {
  // List all available location names from the data file.
  const data = await readDataFile();
  return data.map((item) => item.location);
}
