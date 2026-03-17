const productService = require("../services/ProductService");

const MAX_INT = 2147483647;

function toSafeInt(v, def = 0) {
  const n = parseInt(v, 10);
  if (!Number.isFinite(n)) return def;
  return Math.max(0, Math.min(MAX_INT, n));
}

// Map frontend keys to DB; only pass allowed fields so id/overflow never reach DB
function normalizeProductBody(body, forCreate = false) {
  const data = {};
  if (body.categoryId !== undefined) data.categoryID = toSafeInt(body.categoryId);
  else if (body.categoryID !== undefined) data.categoryID = toSafeInt(body.categoryID);
  if (body.priceSell != null) data.priceSell = Number(body.priceSell);
  if (body.priceBuy != null) data.priceBuy = Number(body.priceBuy);
  if (body.stock != null) data.stock = toSafeInt(body.stock);
  if (body.name !== undefined) data.name = body.name == null ? null : String(body.name);
  return data;
}

async function getAll(req, res) {
  try {
    const list = await productService.getAll();
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getById(req, res) {
  try {
    const item = await productService.getById(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function create(req, res) {
  try {
    const data = normalizeProductBody(req.body, true);
    if (data.categoryID == null || data.categoryID === "") {
      return res.status(400).json({ error: "categoryID is required" });
    }
    const created = await productService.create(data);
    res.status(201).json(created);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function update(req, res) {
  try {
    const data = normalizeProductBody(req.body);
    if (data.categoryID !== undefined && (data.categoryID == null || data.categoryID === "")) {
      return res.status(400).json({ error: "categoryID cannot be empty" });
    }
    const updated = await productService.update(req.params.id, data);
    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function remove(req, res) {
  try {
    const deleted = await productService.delete(Number(req.params.id));
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getAll, getById, create, update, delete: remove };
