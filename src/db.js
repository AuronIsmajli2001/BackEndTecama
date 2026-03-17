const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("RestaurantDB", "sa", "YourStrong!Passw0rd", {
  host: "localhost",
  dialect: "mssql",
  dialectOptions: {
    options: { encrypt: false, trustServerCertificate: true }
  },
  logging: false
});

async function connectDB() {
  await sequelize.authenticate();
  console.log("Database connected.");
}

module.exports = sequelize;
module.exports.connectDB = connectDB;