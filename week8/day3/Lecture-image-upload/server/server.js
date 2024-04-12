import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import imageRoutes from './routes/image.routes.js';

const app = express();
app.use(express.json(), cors({ origin: 'http://127.0.0.1:5173'}));
app.use('/api', imageRoutes); 
dotenv.config();
const PORT = process.env.PORT;
dbConnect();
app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);

