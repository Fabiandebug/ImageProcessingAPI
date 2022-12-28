import express from 'express';
import mainRender from './src/routes/defaultRender';
import imageResizer from './src/routes/Images';

const app = express();
const port = 3000;

// Routes
app.use('/', mainRender);
app.use('/images', imageResizer);

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
