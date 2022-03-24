import app from '../../../app';
import { agent } from 'supertest';
const request = agent(app);

describe('Init Point', () => {
    it('Should fails when the request is not native', () => {
        return request
            .get('/v1/auth/login')
            .set({
                    "username": "facundo",
                    "password": "123456",
                    "email": "a@a.com",
                    "malicius": "x</asss>"
                })
            .expect(200)
            .then(response => expect(response.body).toMatchSnapshot());
    });
});