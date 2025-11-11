import db from '../db/dbConfig.js';

class Table {
    constructor({seats, active}) {
        this.seats = seats;
        this.active = active;
    }

    static async getTables() {
        return await db.select('*').from('tables');
    }

    static async getTableById(id) {
        const table = await db.select('*').from('tables').where({ id });
        return table[0];
    }
}

export default Table;