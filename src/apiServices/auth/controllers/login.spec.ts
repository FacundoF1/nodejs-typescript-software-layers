import request from "supertest";
import { app } from "@app";

describe('UT: ', () => {
    test('routes', () => {
        request(app)
            .post('/user')
            .send({
                "username": "facundo",
                "password": "123456",
                "email": "a@a.com",
                "malicius": "x</asss>"
            })
            .expect('Content-Type', /json/)
            .expect('Content-Length', '15')
            .expect(200)
            .end(function(err, res) {
                if (err) throw err;
            });
    })
})
