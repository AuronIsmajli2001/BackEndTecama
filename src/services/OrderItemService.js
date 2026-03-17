const orderItemRepository = require("../repositories/OrderItemRepository");

const getAll = () => orderItemRepository.getAll();
const getById = (id) => orderItemRepository.getById(id);
const create = (data) => orderItemRepository.create(data);
const update = (id, data) => orderItemRepository.update(id, data);
const remove = (id) => orderItemRepository.delete(id);

module.exports = { getAll, getById, create, update, delete: remove };
