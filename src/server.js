const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db");
const categoryRoutes = require("./routes/categoryRoutes");
const userRoutes = require("./routes/userRoutes");
const tableRoutes = require("./routes/tableRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const orderItemRoutes = require("./routes/orderItemRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/categories", categoryRoutes);
app.use("/api/users", userRoutes);
app.use("/api/tables", tableRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/order-items", orderItemRoutes);

connectDB()
  .then(() => {
    app.listen(3000, () => console.log("Server running on http://localhost:3000"));
  })
  .catch((err) => console.error("DB connection failed:", err));