import { Router } from "express";
import ClientController from "../controllers/ClientController.js";

const router = Router();

// CRUD
router.post('/', ClientController.addClient); // create
router.get('/:id', ClientController.getClient); // read 
router.get('/', ClientController.getClients); // read all
router.put('/:id', ClientController.updateClient); // update
router.delete('/:id', ClientController.deleteClient); // delete

export default router;