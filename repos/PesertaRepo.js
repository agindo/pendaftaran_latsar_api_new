const Peserta = require('../models/Peserta');

class PesertaRepository {
    constructor(model) {
        this.model = model
    }

    findAll() {
        return this.model.find();
    }
}

module.exports = new PesertaRepository(Peserta);