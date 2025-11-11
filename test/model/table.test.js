import { describe, expect, it } from '@jest/globals';
import Table from '../../src/models/table';

describe('Testanto Table', () => {
    const tableMock = {
        seats: 4,
        active: 1,
    };
    const table = new Table(tableMock);

    it.each([
        {expected: tableMock.seats, received: table.seats},
        {expected: tableMock.active, received: table.active},
    ])('Table deve criar uma instancia corretamente', ({expected, received}) => {
        expect(received).toBe(expected);
    });

    it('Table.getTableById deve retornar a mesa com o ID especificado', async () => {
        const id = 1;
        const table = await Table.getTableById(id);

        expect(table.id).toBe(id);
    });
});