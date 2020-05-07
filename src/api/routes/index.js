import express from 'express';
import recipeRouter from './recipes';

const api = express();

api.use('/recipes', recipeRouter);

export default api;
