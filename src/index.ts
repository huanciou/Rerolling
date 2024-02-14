import express from 'express';
import { errorHandler } from './utils/errorHandler';
import gamesRouter from './routes/games'

const app = express();
const port: number = 8080;

app.use('/api/1.0', [gamesRouter]);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})