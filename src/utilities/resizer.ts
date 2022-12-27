//Imports
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

//Function that resizes image using sharp.
const resizeImage = async (
  filename: string,
  width: number,
  height: number
): Promise<string> => {
  //Get pathes for input and out 
  const inPath: fs.PathLike = path.join(
    __dirname,
    '..',
    '..',
    'images',
    filename + '.jpg'
  );
  const outPath: fs.PathLike = path.join(
    __dirname,
    '..',
    '..',
    'images',
    'resizedimg'
  );
  //Check if directory exists, and make it if it doesn't.
  if (!fs.existsSync(outPath)) {
    fs.mkdirSync(outPath);
  }

  try {
    await sharp(inPath)
      .resize(width, height)
      .toFile(path.join(outPath, filename + width + 'x' + height + '.jpg'));
    return 'success';
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to resize image: ${error}`);
  }
};

//Exports
export default resizeImage;
