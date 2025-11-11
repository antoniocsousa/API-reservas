import { describe, expect, it } from '@jest/globals';
import Table from '../../src/models/table';

describe('Testanto Table', () => {
    it('Table.getTableById deve retornar a mesa com o ID especificado', async () => {
        const id = 1;
        const table = await Table.getTableById(id);

        expect(table.id).toBe(id);
    });
});