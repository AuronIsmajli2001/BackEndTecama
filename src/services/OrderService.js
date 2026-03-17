const orderRepository = require("../repositories/OrderRepository");

const getAll = () => orderRepository.getAll();
const getById = (id) => orderRepository.getById(id);
const create = (data) => orderRepository.create(data);
const update = (id, data) => orderRepository.update(id, data);
const remove = (id) => orderRepository.delete(id);

module.exports = { getAll, getById, create, update, delete: remove };
