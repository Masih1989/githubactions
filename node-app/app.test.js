const request = require('supertest');
const app = require('./app');
const { expect } = require('chai');

describe('Test the root path', () => {
    test('It should respond to the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });

    // test('It should calculate the sume correctly', async () => {
    //     const response = await request(app)
    //     .post('/calculate')
    //     .type('form')
    //     .send({ num1: '5', num2: '10' });
    //     expect(response.text).toMatch(/Sum);
    // });

    // test('It should respond to the GET method', async () => {
    //     const response = await request(app).get('/');
    //     expect(response.statusCode).toBe(200);
    // });
});