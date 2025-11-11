import TablesService from "../services/tablesService.js";

class TablesController {
    static listTables = async (req, res) => {
        try {
            const result = await TablesService.listTables();

            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static listTablesById = async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const result = await TablesService.listTablesById(id);

            res.status(200).json(result);
        } catch (error) {
            if (error.message === 'The parameter "id" must be integer') {
                res.status(400).json(error.message);
            } else {
                res.status(500).json(error.message);
            }
        }
    }
}

export default TablesController;