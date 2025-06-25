/**
 * Main server file:
 * - Configures Express application with JSON body parsing and CORS.
 * - Serves static frontend files.
 * - Mounts weather API routes under /api.
 * - Handles errors with global error middleware.
 */
import express from 'express';
import cors from 'cors';
import weatherRoutes from './backend/routes/weather.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(cors());

// Serve frontend static files and HTML entry point
app.use(express.static(path.join(__dirname, 'frontend')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Mount weather API routes under /api
app.use('/api', weatherRoutes);

// Global error handler: format and send error response as JSON
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    success: false,
    error: {
      message: err.message || 'Internal Server Error',
      code: err.code || 'INTERNAL_SERVER_ERROR'
    },
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
