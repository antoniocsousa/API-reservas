import request from 'supertest';
import { afterAll, beforeAll, describe, expect, it } from '@jest/globals';
import app from '../../src/app.js';

let server;
beforeAll(() => {
    server = app.listen(4000);
});

afterAll(() => {
    server.close();
});

describe('Testando as rotas de tables', () => {
    it('/tables deve retornar uma lista de mesas (GET)', async () => {
        await request(app)
            .get('/tables')
            .expect(200);
    });

    it('/tables/:id deve retornar uma mesa com o id passado (GET))', async () => {
        const idMock = 1;

        const response = await request(app)
            .get(`/tables/${idMock}`)
            .expect(200);
        
        expect(response.body.id).toBe(idMock);
    });
});