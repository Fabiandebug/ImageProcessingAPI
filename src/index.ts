//Imports
import express from 'express';
import mainRender from './routes/defaultRender';
import imageResizer from './routes/Images';
//Server Initialization
const app = express();
const port = 3000;



//Routes.
app.use('/', mainRender)
app.use('/images', imageResizer);

app.listen(port, () => {
  console.log('server is running on localhost:' + port);
});
