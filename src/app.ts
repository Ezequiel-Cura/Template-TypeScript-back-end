import express from 'express';

import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

import router from './routes';

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(morgan('dev'));

app.use(bodyParser.json());

app.use(
  cors({
    origin: [
      `${process.env.FRONT_URL_1}`,
      `${process.env.FRONT_URL_2}`,
      `${process.env.FRONT_URL_3}`,
      'http://localhost:3000',
    ],
    methods: ['POST', 'PUT', 'GET', 'DELETE'],
    allowedHeaders:
      'Origin, X-Requested-With, Content-Type, Accept,Authorization',
    // credentials:true,
  }),
);

app.get('/', (req, res) => {
  res.send('API');
});

app.use('/', router);

export default app;
