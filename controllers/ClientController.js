import connection from '../config/db';

/* CRUD de Clientes no Controller */

// Adicionar um cliente
const addClient = (req, res) => {
    const { nome, telefone } = req.body;

    if (!nome || !telefone) {
        return res.status(400).json({ error: 'Nome e telefone são obrigatórios' });
    }

    const query = 'INSERT INTO my_table (nome, telefone) VALUES (?, ?)';

    connection.query(query, [nome, telefone], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao adicionar cliente' });
        }
        res.json({ message: 'Cliente adicionado com sucesso', clientId: results.insertId });
    });
};

// Obter um cliente específico
const getClient = (req, res) => {
    const { id } = req.params;

    const query = 'SELECT * FROM my_table WHERE id = ?';

    connection.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao obter cliente' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        res.json(results[0]);
    });
};

// Obter todos os clientes com suporte para ordenação
// Obter todos os clientes com suporte para ordenação
const getClients = (req, res) => {
    const { _sort, _order } = req.query;

    console.log(_sort)

    let query = 'SELECT * FROM my_table';

    // Adicione a cláusula ORDER BY se houver parâmetros de ordenação
    if (_sort) {
        query += ` ORDER BY ${_sort} ${_order === 'desc' ? 'DESC' : 'ASC'}`;
    }

    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao obter clientes' });
        }
        res.json(results);
    });
};

// Atualizar um cliente
const updateClient = (req, res) => {
    const { id } = req.params;
    const { nome, telefone } = req.body;

    if (!nome || !telefone) {
        return res.status(400).json({ error: 'Nome e telefone são obrigatórios' });
    }

    const query = 'UPDATE my_table SET nome = ?, telefone = ? WHERE id = ?';

    connection.query(query, [nome, telefone, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao atualizar cliente' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        res.json({ message: 'Cliente atualizado com sucesso' });
    });
};

// Deletar um cliente
const deleteClient = (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM my_table WHERE id = ?';

    connection.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao remover cliente' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        res.json({ message: 'Cliente removido com sucesso' });
    });
};

export default { addClient, getClient, updateClient, getClients, deleteClient };
