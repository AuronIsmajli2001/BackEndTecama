const categoryRepository = require("../repositories/CategoryRepository");

const getAll = () => categoryRepository.getAll();
const getById = (id) => categoryRepository.getById(id);
const create = (data) => categoryRepository.create(data);
const update = (id, data) => categoryRepository.update(id, data);
const remove = (id) => categoryRepository.delete(id);

module.exports = { getAll, getById, create, update, delete: remove };
