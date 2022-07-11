import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { connectToDatabase } from './utils/db.connection';
import api_router from './routes/api.routes';

const app = express();

const PORT = process.env.PORT;
const HOST = process.env.HOST;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API
app.use('/api', api_router);

/** Error handling */
app.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});

app.listen(PORT, async () => {
    console.log(` App running at http://www.${HOST}:${PORT}`);

    await connectToDatabase();

});
