import express from 'express';
import { urlencoded } from 'body-parser';
import cors from 'cors';
import apiRouter from './src/api/baseRouter';

const app = express();

app.use(urlencoded({ extended: false }));
app.use(cors());

app.use('/api', apiRouter);

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'production') {
  app.use(express.static('./dist-client'));
  app.use('*', express.static('./dist-client/index.html'));
}

const { PORT } = process.env;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
