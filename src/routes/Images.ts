import express from 'express';
import resizeImage from '../utilities/resizer';
import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';

const imageResizer = express.Router();

imageResizer.get('/', async (req: Request, res: Response): Promise<void> => {
  const filename = req.query.filename;
  const width = req.query.width;
  const height = req.query.height;

  //url query parameters
  const fname = typeof filename === 'string' ? filename : '';
  const w = typeof width === 'string' ? parseInt(width, 0) : 0;
  const h = typeof height === 'string' ? parseInt(height, 0) : 0;

  //file paths for input and output
  const inPath: fs.PathLike = path.join(
    __dirname,
    '..',
    '..',
    'src',
    'images',
    fname + '.jpg'
  );
  const outPath: fs.PathLike = path.join(
    __dirname,
    '..',
    '..',
    'src',
    'images',
    'resizedimg',
    fname + w + 'x' + h + '.jpg'
  );

  if (filename != null) {
    //filename is entered in query string.
    if (!fs.existsSync(inPath)) {
      //check if that file exists or not,if the file doesn't exist, return file not found.

      const error = {
        message:
          'File not found: ' + inPath + '. Please enter a valid image name.',
      };
      res.status(404).send(error);

    }

    //file exists
    else {
      //if there is no width or hight entered, return original image.
      if (width == null && height == null) {
        //return original image.
        res.status(200).sendFile(inPath);
      } else {
        //first check if a resized image is stored, if not then resize it .
        if (!fs.existsSync(outPath)) {
          //if a resized image doesn't exist, resize a new image using sharp and save
          if (width != null && height != null) {
            //both width and height are entered

            //if width and height are not numbers, raise error
            if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
              const error = {
                message:
                  'Please enter a number for the width and height and greater than 0, example:height=300,width=500',
                error: 'Invalid width or height',
              };
              res.status(400).send(error);
            } else {
              //resize the image and return the result.
              try {
                resizeImage(fname, w, h).then(() => {
                  res.status(200).sendFile(outPath);
                  console.log(fname);
                });
              } catch (error) {
                res.status(500).send(`Failed to resize image,${'+'}${error}`);
              }
            }
          }
        }

        //Retrieve a stored image if it exixts
        else {
          res.sendFile(outPath);
          res.status(201);
        }
      }
    }
  } else {
    //Check if image name has been provided.
    const error = {
      message: 'Please provide the image name',
      error: 'Image/Filename cannot be blank',
    };
    res.status(400).send(error);
  }
});
//export func
export default imageResizer;
