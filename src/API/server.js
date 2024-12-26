// const express = require("express");
// const { Pool } = require("pg");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// // Set up Express app
// const app = express();
// const port = 5000;

// // Enable CORS
// app.use(cors());

// // Parse JSON bodies
// app.use(bodyParser.json());

// // Set up PostgreSQL client
// const pool = new Pool({
//     user: "postgres", // Your PostgreSQL username
//     host: "localhost",
//     database: "practicedb",
//     password: "root", // Your PostgreSQL password
//     port: 5432,
// });

// // Route to insert item data into PostgreSQL
// app.post("/insert", async (req, res) => {
//     const { reason, reasonCode, approvedBy, itemId, itemName } = req.body;
//     console.log("Payload received:", req.body);
//     try {
//         const query = `
//       INSERT INTO dropped_items (reason, reason_code, approved_by, item_id, item_name)
//       VALUES ($1, $2, $3, $4, $5)
//     `;
//         await pool.query(query, [reason, reasonCode, approvedBy, itemId, itemName]);
//         res.status(200).send("Item inserted successfully");
//     } catch (error) {
//         console.error("Error inserting item:", error);
//         res.status(500).send("Error inserting item");
//     }
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(bodyParser.json());

// Set up PostgreSQL client
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "practicedb",
  password: "root",
  port: 5432,
});

// Route to insert item data into PostgreSQL
app.post("/insert", async (req, res) => {
  const { reason, reasonCode, approvedBy, itemId, itemName } = req.body;

  try {
    const query = `
      INSERT INTO dropped_items (reason, reason_code, approved_by, item_id, item_name)
      VALUES ($1, $2, $3, $4, $5)
    `;
    await pool.query(query, [reason, reasonCode, approvedBy, itemId, itemName]);
    res.status(200).send("Item inserted successfully");
  } catch (error) {
    console.error("Error inserting item:", error);
    res.status(500).json({ message: "Error inserting item", error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
