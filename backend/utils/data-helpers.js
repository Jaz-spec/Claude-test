import { readFile } from 'fs/promises';
import path from 'path';

const DATA_PATH = path.resolve('backend/data/weather-data.json');

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
  return readDataFile();
}

export async function getWeatherByLocation(location) {
  const data = await readDataFile();
  const entry = data.find(
    (item) => item.location.toLowerCase() === location.toLowerCase()
  );
  return entry ? entry.weather : null;
}

export async function getAvailableLocations() {
  const data = await readDataFile();
  return data.map((item) => item.location);
}
