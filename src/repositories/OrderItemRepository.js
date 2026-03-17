const BaseRepository = require("./BaseRepository");
const OrderItem = require("../models/OrderItems");

module.exports = new BaseRepository(OrderItem);
