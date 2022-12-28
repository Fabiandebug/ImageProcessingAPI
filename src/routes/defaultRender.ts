import express from 'express';
const mainRender = express.Router();

mainRender.get('/', (req, res) => {
  res.send('Image Processing API!').status(200);
});

export default mainRender;
