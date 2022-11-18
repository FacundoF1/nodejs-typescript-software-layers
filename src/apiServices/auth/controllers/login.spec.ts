const request = require("supertest");
const { app } = require("@app");

describe('UT: ', () => {
    test('routes', (done) => {
        request(app)
            .post('/auth/login')
            .send({
                "username": "facundo",
                "password": "123456",
                "email": "facundo@gmail.com",
                "malicius": "x</asss>"
            })
            // .expect('Content-Type', "text/html; charset=utf-8")
            // .expect('Content-Length', '640')
            .expect(200, done);
    })
})
