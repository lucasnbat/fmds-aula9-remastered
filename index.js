import express from 'express';
import clientRoutes from './routes/ClientRoutes.js';
import cors from 'cors';

const app = express();

// uasr cors
app.use(cors());

// Usar json no corpo da requisição
app.use(express.json());

app.use('/client', clientRoutes);

app.listen(5000, () => { console.log('Servidor express rodando') }); ''