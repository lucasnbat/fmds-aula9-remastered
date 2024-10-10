import express from 'express';
import clientRoutes from './routes/ClientRoutes.js';

const app = express();

// Usar json no corpo da requisição
app.use(express.json());

app.use('/client', clientRoutes);

app.listen(5000, () => { console.log('Servidor express rodando') }); ''