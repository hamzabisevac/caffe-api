const connection = require("../db/db");

const getAllCategories = (req, res) => {
  connection.query("SELECT * FROM Categories", (err, results) => {
    if (err) {
      console.error("Error executing MySQL query: " + err.stack);
      res.status(500).send("Internal server error");
      return;
    }
    res.status(200).json(results);
  });
};

const createCategory = (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    res.status(400).send("Bad request");
    return;
  }
  connection.query(
    "INSERT INTO Categories (name, description) VALUES (?, ?)",
    [name, description],
    (err, results) => {
      if (err) {
        console.error("Error executing MySQL query: " + err.stack);
        res.status(500).send("Internal server error");
        return;
      }
      res.status(201).send("Category created successfully");
    }
  );
};

const updateCategory = (req, res) => {
  const categoryId = req.params.id;
  const { name, description } = req.body;
  if (!name || !description) {
    res.status(400).send("Bad request");
    return;
  }
  connection.query(
    "UPDATE Categories SET name=?, description=? WHERE id=?",
    [name, description, categoryId],
    (err, results) => {
      if (err) {
        console.error("Error executing MySQL query: " + err.stack);
        res.status(500).send("Internal server error");
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).send("Category not found");
        return;
      }
      res.status(200).send("Category updated successfully");
    }
  );
};
const deleteCategory = (req, res) => {
  const categoryId = req.params.id;
  connection.query(
    "DELETE FROM Categories WHERE id = ?",
    [categoryId],
    (err, results) => {
      if (err) {
        console.error("Error executing MySQL query: " + err.stack);
        res.status(500).send("Internal server error");
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).send("Category not found");
        return;
      }
      res.status(200).send("Category deleted successfully");
    }
  );
};

module.exports = {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
