const userRepository = require("../repositories/UserRepository");

const getAll = () => userRepository.getAll();
const getById = (id) => userRepository.getById(id);
const create = (data) => userRepository.create(data);
const update = (id, data) => userRepository.update(id, data);
const remove = (id) => userRepository.delete(id);

module.exports = { getAll, getById, create, update, delete: remove };
