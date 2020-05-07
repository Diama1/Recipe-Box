import 'regenerator-runtime';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import api from './api/routes';

import './handlers/cloudinaryConfig';

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.json({ message: 'Welcome To Portfolio' }));
app.use('/api', api);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

export default app;
