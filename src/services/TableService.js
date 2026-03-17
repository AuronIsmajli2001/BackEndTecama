const tableRepository = require("../repositories/TableRepository");

const getAll = () => tableRepository.getAll();
const getById = (id) => tableRepository.getById(id);
const create = (data) => tableRepository.create(data);
const update = (id, data) => tableRepository.update(id, data);
const remove = (id) => tableRepository.delete(id);

module.exports = { getAll, getById, create, update, delete: remove };
