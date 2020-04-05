const express = require('express');
const app = express.Router();
const peserta = require('../repos/PesertaRepo');

app.get('/peserta', (req, res) => {
    peserta.findAll().then((serta) => {
        res.json(serta);
    }).catch((error) => console.log(error));
})

module.exports = app;