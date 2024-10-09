import express from 'express';
import { randomUUID } from 'crypto';
const app = express();

// Usar json no corpo da requisição
app.use(express.json());

let clientes = [];

/* *** Endpoint Cliente *** */
// Create
app.post('/cliente', (req, res) => {
    const id = randomUUID();
    const cliente = { id, ...req.body };
    clientes.push(cliente);
    res.json(cliente);
});
// Read
// Retorna todos os clientes (vetor inteiro)
app.get('/cliente', (req, res) => {
    res.json(clientes);
});
// Retorna um cliente específico, solicitado pela variável id
app.get('/cliente/:id', (req, res) => {
    res.json(clientes.find(cliente => cliente.id == req.params.id));
});
// Update
app.put('/cliente/:id', (req, res) => {
    const id = req.params.id;
    const atualizacao = req.body;
    // atualizar os dados do cliente pelo id
    const cliente = clientes.find(cliente => cliente.id == id);
    cliente.nome = atualizacao.nome;
    res.json(cliente);
});

app.delete('/cliente/:id', (req, res) => {
    const id = req.params.id;
    const index = clientes.findIndex(cliente => cliente.id == id);
    clientes.splice(index, 1);

    res.send('Cliente deletado no banco de dados');
});

app.listen(5000, () => { console.log('Servidor express rodando') }); ''