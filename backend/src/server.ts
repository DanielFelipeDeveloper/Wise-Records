import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import routes from './routes';
import upload from './config/upload';

import './database';

const app = express();

app.use(cors());
app.use('/files', express.static(upload.imageBeatDirectory));
app.use(express.json());
app.use(routes);

app.listen(3333);
