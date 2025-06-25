import express from 'express';
import { getAllWeather, getWeatherByLocation, getAvailableLocations } from '../utils/data-helpers.js';

const router = express.Router();

router.get('/weather', async (req, res, next) => {
  try {
    const weatherData = await getAllWeather();
    res.json({ success: true, data: weatherData, timestamp: new Date().toISOString() });
  } catch (err) {
    next(err);
  }
});

router.get('/weather/:location', async (req, res, next) => {
  try {
    const { location } = req.params;
    const weather = await getWeatherByLocation(location);
    if (!weather) {
      const error = new Error(`Location not found: ${location}`);
      error.status = 404;
      error.code = 'LOCATION_NOT_FOUND';
      throw error;
    }
    res.json({ success: true, data: { location, weather }, timestamp: new Date().toISOString() });
  } catch (err) {
    next(err);
  }
});

router.get('/locations', async (req, res, next) => {
  try {
    const locations = await getAvailableLocations();
    res.json({ success: true, data: locations, timestamp: new Date().toISOString() });
  } catch (err) {
    next(err);
  }
});

export default router;
