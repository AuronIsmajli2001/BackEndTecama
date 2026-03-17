/**
 * Generic repository – like IRepository<T> in .NET.
 * getAll, getById, create, update, delete.
 */
class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    return this.model.findAll();
  }

  async getById(id) {
    return this.model.findByPk(id);
  }

  async create(data) {
    return this.model.create(data);
  }

  async update(id, data) {
    const entity = await this.model.findByPk(id);
    if (!entity) return null;
    await entity.update(data);
    return entity;
  }

  async delete(id) {
    const entity = await this.model.findByPk(id);
    if (!entity) return false;
    await entity.destroy();
    return true;
  }
}

module.exports = BaseRepository;
