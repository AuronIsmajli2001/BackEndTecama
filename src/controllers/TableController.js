const tableService = require("../services/TableService");

async function getAll(req, res) {
  try {
    const list = await tableService.getAll();
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getById(req, res) {
  try {
    const item = await tableService.getById(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function create(req, res) {
  try {
    const { number } = req.body;
    const created = await tableService.create({ number });
    res.status(201).json(created);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function update(req, res) {
  try {
    const updated = await tableService.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function remove(req, res) {
  try {
    const deleted = await tableService.delete(Number(req.params.id));
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getAll, getById, create, update, delete: remove };
