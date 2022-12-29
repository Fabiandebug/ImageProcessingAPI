import resizeImage from "../../utilities/resizer";
import fs from 'fs';
import assert from 'assert';
import path from 'path'



describe('Testing if image processing works', () => {
    it('should generate a resized image path', () => {

        const fname = 'santamonica'
        const w = 250
        const h = 500
        const inPath: fs.PathLike = path.join(
            fname
        );

        const outPath: fs.PathLike = path.join(
            __dirname,
            '..',
            '..',
            '..',
            'src',
            'images',
            'resizedimg',
            fname + w + 'x' + h + '.jpg'
        );

        // Test if the function generates a resized image
        if (fs.existsSync(outPath)) {
            fs.unlinkSync(outPath);
        }

        return resizeImage(inPath, w, h).then(() => {
            assert(fs.existsSync(outPath));
        });
    });
});
