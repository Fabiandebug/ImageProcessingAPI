import supertest from 'supertest';
import app from '../..';

const req = supertest(app);

describe('Image Processing API test', () => {
    it('Testing the main render route.', async () => {
        const res = await req.get('/');
        expect(res.status).toEqual(200);
    });

    it('Testing the main image routes', async () => {
        const res = await req.get(
            '/images'
        );
        expect(res.status).toEqual(400);
    });

    it('Passing empty filename in the url parameters.', async () => {
        const res = await req.get('/images');
        expect(res.status).toEqual(400);
    });

    it('Passing a filename that does not exist.', async () => {
        const res = await req.get(
            '/images?filename=testfilename&width=150&height=400'
        );
        expect(res.status).toEqual(404);
    });





});