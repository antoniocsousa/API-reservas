import express from 'express';
import TablesController from "../controllers/tablesController.js";

const router = express.Router();

router
    .get('/tables', TablesController.listTables)
    .get('/tables/:id', TablesController.listTablesById);

export default router;