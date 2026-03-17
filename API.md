# Tiki Backend – API reference for frontend

**Base URL:** `http://localhost:3000/api`

Start the server: `npm start` or `node src/server.js` (from project root).

---

## Request body – columns per resource

Use these **exact** property names when sending JSON. **Required** = must be sent on create.

| Resource | Property | Type | Required (create) | Notes |
|----------|----------|------|-------------------|--------|
| **Category** | `name` | string | ✅ Yes | |
| **User** | `name` | string | ✅ Yes | |
| | `passcode` | string | ✅ Yes | |
| | `role` | string | No | e.g. "waiter", "admin" |
| **Table** | `number` | number | No | Table number |
| **Product** | `categoryID` | number | ✅ Yes | ID of existing category |
| | `priceSell` | number | No | e.g. 4.99 |
| | `priceBuy` | number | No | e.g. 2.50 |
| | `stock` | number | No | |
| **Order** | `tableId` | number | ✅ Yes | ID of existing table |
| | `userId` | number | ✅ Yes | ID of existing user |
| | `status` | string | No | Default "open"; e.g. "closed" |
| **OrderItem** | `orderId` | number | ✅ Yes | ID of existing order |
| | `productId` | number | ✅ Yes | ID of existing product |
| | `quantity` | number | ✅ Yes | |

**Product create example (categoryID is required):**

```json
{
  "categoryID": 1,
  "priceSell": 4.99,
  "priceBuy": 2.50,
  "stock": 100
}
```

---

## 1. Categories

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/categories` | Get all categories |
| GET | `/api/categories/:id` | Get category by id |
| POST | `/api/categories` | Create category |
| PUT | `/api/categories/:id` | Update category |
| DELETE | `/api/categories/:id` | Delete category |

**Body (create/update):** `{ "name": "Beverages" }`

### Example calls (fetch)

```javascript
const BASE = "http://localhost:3000/api";

// Get all
const categories = await fetch(`${BASE}/categories`).then(r => r.json());

// Get by id
const category = await fetch(`${BASE}/categories/1`).then(r => r.json());

// Create
const created = await fetch(`${BASE}/categories`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Beverages" })
}).then(r => r.json());

// Update
const updated = await fetch(`${BASE}/categories/1`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Drinks" })
}).then(r => r.json());

// Delete
await fetch(`${BASE}/categories/1`, { method: "DELETE" });
```

---

## 2. Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by id |
| POST | `/api/users` | Create user |
| PUT | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |

**Body (create/update):** `{ "name": "John", "passcode": "1234", "role": "waiter" }`

### Example calls (fetch)

```javascript
// Get all
const users = await fetch(`${BASE}/users`).then(r => r.json());

// Get by id
const user = await fetch(`${BASE}/users/1`).then(r => r.json());

// Create
const created = await fetch(`${BASE}/users`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "John", passcode: "1234", role: "waiter" })
}).then(r => r.json());

// Update
const updated = await fetch(`${BASE}/users/1`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Jane", passcode: "5678", role: "admin" })
}).then(r => r.json());

// Delete
await fetch(`${BASE}/users/1`, { method: "DELETE" });
```

---

## 3. Tables

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tables` | Get all tables |
| GET | `/api/tables/:id` | Get table by id |
| POST | `/api/tables` | Create table |
| PUT | `/api/tables/:id` | Update table |
| DELETE | `/api/tables/:id` | Delete table |

**Body (create/update):** `{ "number": 5 }`

### Example calls (fetch)

```javascript
// Get all
const tables = await fetch(`${BASE}/tables`).then(r => r.json());

// Create
const created = await fetch(`${BASE}/tables`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ number: 3 })
}).then(r => r.json());
```

---

## 4. Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get product by id |
| POST | `/api/products` | Create product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |

**Body (create/update):** `{ "categoryID": 1, "priceSell": 4.99, "priceBuy": 2.50, "stock": 100 }`

### Example calls (fetch)

```javascript
// Get all
const products = await fetch(`${BASE}/products`).then(r => r.json());

// Create
const created = await fetch(`${BASE}/products`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    categoryID: 1,
    priceSell: 4.99,
    priceBuy: 2.50,
    stock: 100
  })
}).then(r => r.json());
```

---

## 5. Orders

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/orders` | Get all orders |
| GET | `/api/orders/:id` | Get order by id |
| POST | `/api/orders` | Create order |
| PUT | `/api/orders/:id` | Update order |
| DELETE | `/api/orders/:id` | Delete order |

**Body (create):** `{ "tableId": 1, "userId": 1, "status": "open" }`  
**Body (update):** `{ "status": "closed" }` (or tableId, userId)

### Example calls (fetch)

```javascript
// Get all
const orders = await fetch(`${BASE}/orders`).then(r => r.json());

// Create
const created = await fetch(`${BASE}/orders`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ tableId: 1, userId: 1, status: "open" })
}).then(r => r.json());

// Update status
const updated = await fetch(`${BASE}/orders/1`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ status: "closed" })
}).then(r => r.json());
```

---

## 6. Order items

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/order-items` | Get all order items |
| GET | `/api/order-items/:id` | Get order item by id |
| POST | `/api/order-items` | Create order item |
| PUT | `/api/order-items/:id` | Update order item |
| DELETE | `/api/order-items/:id` | Delete order item |

**Body (create/update):** `{ "orderId": 1, "productId": 2, "quantity": 3 }`

### Example calls (fetch)

```javascript
// Get all
const items = await fetch(`${BASE}/order-items`).then(r => r.json());

// Create (add product to order)
const created = await fetch(`${BASE}/order-items`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ orderId: 1, productId: 2, quantity: 3 })
}).then(r => r.json());
```

---

## Response codes

- **200** – OK (GET, PUT)
- **201** – Created (POST)
- **204** – No content (DELETE success)
- **404** – Not found (invalid id)
- **500** – Server error (body: `{ "error": "message" }`)

---

## Using axios in the frontend

```javascript
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3000/api" });

// Get all categories
const { data } = await api.get("/categories");

// Get one
const { data: category } = await api.get("/categories/1");

// Create
const { data: created } = await api.post("/categories", { name: "Beverages" });

// Update
const { data: updated } = await api.put("/categories/1", { name: "Drinks" });

// Delete
await api.delete("/categories/1");
```

Same pattern for `/users`, `/tables`, `/products`, `/orders`, `/order-items`.
