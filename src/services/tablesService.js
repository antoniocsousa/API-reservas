import Table from '../models/table.js';

async function listTables() {
    try {
        const tables = await Table.getTables();
        return tables;
    } catch(error) {
        throw new Error(error.message);
    }
}

async function listTablesById(id) {
    try {
        if (!Number.isInteger(id)) {
            throw new Error('The parameter "id" must be integer');
        }

        const table = await Table.getTableById(id);
        return table;
    } catch(error) {
        throw new Error(error.message);
    }
}

export {
    listTables,
    listTablesById,
}