const productRepository = require("../repositories/ProductRepository");

const getAll = () => productRepository.getAll();
const getById = (id) => productRepository.getById(id);
const create = (data) => productRepository.create(data);
const update = (id, data) => productRepository.update(id, data);
const remove = (id) => productRepository.delete(id);

module.exports = { getAll, getById, create, update, delete: remove };
