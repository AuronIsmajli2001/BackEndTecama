const userService = require("../services/UserService");

async function getAll(req, res) {
  try {
    const list = await userService.getAll();
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getById(req, res) {
  try {
    const item = await userService.getById(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function create(req, res) {
  try {
    const { id, ...data } = req.body;
    const created = await userService.create(data);
    res.status(201).json(created);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function update(req, res) {
  try {
    const updated = await userService.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function remove(req, res) {
  try {
    const deleted = await userService.delete(Number(req.params.id));
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getAll, getById, create, update, delete: remove };
