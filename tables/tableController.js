const connection = require("../db/db");

const createTable = (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).send("Bad request: Missing parameter 'name'");
    return;
  }
  connection.query(
    "INSERT INTO Tables (name) VALUES (?)",
    [name],
    (err, results) => {
      if (err) {
        console.error("Error executing MySQL query: " + err.stack);
        res.status(500).send("Internal server error");
        return;
      }
      res.status(201).send("Table created successfully");
    }
  );
};

const createOrder = (req, res) => {
  const { tableId } = req.params;
  const { items } = req.body;

  if (!tableId || !items || items.length === 0) {
    res.status(400).send("Bad request: Missing parameters");
    return;
  }

  // Prvo, kreiramo novu porudžbinu u tabeli ORDERS
  connection.query(
    "INSERT INTO Orders (table_id) VALUES (?)",
    [tableId],
    (err, result) => {
      if (err) {
        console.error("Error executing MySQL query: " + err.stack);
        res.status(500).send("Internal server error");
        return;
      }

      const orderId = result.insertId;

      items.forEach((item) => {
        const { articleId, price, quantity } = item;
        const total = price * quantity;

        connection.query(
          "INSERT INTO ORDERS_ITEMS (order_id, article_id, price, quantity, total) VALUES (?, ?, ?, ?, ?)",
          [orderId, articleId, price, quantity, total],
          (err) => {
            if (err) {
              console.error("Error executing MySQL query: " + err.stack);
              res.status(500).send("Internal server error");
              return;
            }
          }
        );
      });

      connection.query(
        "SELECT SUM(total) AS total FROM ORDERS_ITEMS WHERE order_id = ?",
        [orderId],
        (err, result) => {
          if (err) {
            console.error("Error executing MySQL query: " + err.stack);
            res.status(500).send("Internal server error");
            return;
          }

          const totalAmount = result[0].total;

          connection.query(
            "UPDATE Orders SET total = ? WHERE id = ?",
            [totalAmount, orderId],
            (err) => {
              if (err) {
                console.error("Error executing MySQL query: " + err.stack);
                res.status(500).send("Internal server error");
                return;
              }
            }
          );
        }
      );

      res.status(201).send("Order created successfully");
    }
  );
};

const payOrder = (req, res) => {
  const tableId = req.params.tableId;
  const sql =
    "UPDATE Orders SET status = 'paid' WHERE table_id = ? AND status = 'pending'";
  connection.query(sql, [tableId], (err, results) => {
    if (err) {
      console.error("Error executing MySQL query: " + err.stack);
      res.status(500).send("Internal server error");
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send("No pending orders found for this table");
      return;
    }
    res.status(200).send("Orders paid successfully");
  });
};
module.exports = {
  createTable,
  createOrder,
  payOrder,
};
