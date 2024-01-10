// server.js
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productsRoutes from './routes/productsRoutes.js'; // Import the productsRoutes

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Use the productsRoutes
app.use('/api/products', productsRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
