import db from '../conf/db.js';
/* CRUD - CLIENT CONTROLLER */
const addClient = (req, res) => {
    // Add a new client
    const client = req.body;
    const query = `INSERT INTO clients VALUES (uuid(), '${client.name}', '${client.email}')`;
    db.query(query, (err, result) => {
        if (err) res.status(500);
        res.json(result);
    });
}
const getClient = (req, res) => {
    // Get a client
    const id = req.params.id;
    const query = `SELECT * FROM clients WHERE uuid = '${id}'`;
    db.query(query, (err, result) => {
        if (err) res.status(500);
        res.json(result);
    });
}
const getClients = (req, res) => {
    // Get all clients
    const query = 'SELECT * FROM clients';
    db.query(query, (err, result) => {
        if (err) res.status(500);
        res.json(result);
    });
}
const updateClient = (req, res) => {
    // Update a client
    const id = req.params.id;
    const client = req.body;
    const query = `UPDATE clients SET name = '${client.name}', email = '${client.email}' WHERE uuid = '${id}'`;
    db.query(query, (err, result) => {
        if (err) res.status(500);
        res.json(result);
    });
}
const deleteClient = (req, res) => {
    // Delete a client
    const id = req.params.id;
    const query = `DELETE FROM clients WHERE uuid = '${id}'`;
    db.query(query, (err, result) => {
        if (err) res.status(500);
        res.json(result);
    });
}

export default { addClient, getClient, getClients, updateClient, deleteClient };