import { Router } from 'express'
import clientController from '../controllers/ClientController.js'

const router = Router()

router.post('/', clientController.addClient);
router.get('/:id', clientController.getClient);
router.get('/', clientController.getClients);
router.put('/:id', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);

export default router

