import { listTables, listTablesById } from "../services/tablesService.js";

class TablesController {
    static listTables = async (req, res) => {
        try {
            const result = await listTables();

            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static listTablesById = async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const result = await listTablesById(id);

            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

export default TablesController;