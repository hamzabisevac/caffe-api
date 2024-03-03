const connection = require("../db/db");

const getAllGroups = (req, res) => {
  connection.query("SELECT * FROM `Groups`", (err, results) => {
    if (err) {
      console.error("Error executing MySQL query: " + err.stack);
      res.status(500).send("Internal server error");
      return;
    }
    res.status(200).json(results);
  });
};

const createGroups = (req, res) => {
  const { name, description, category_id } = req.body;
  if (!name || !description || !category_id) {
    res.status(400).send("Bad request");
    return;
  }
  connection.query(
    "INSERT INTO `Groups` (name, description, category_id) VALUES (?, ?, ?)",
    [name, description, category_id],
    (err, results) => {
      if (err) {
        console.error("Error executing MySQL query: " + err.stack);
        res.status(500).send("Internal server error");
        return;
      }
      res.status(201).send("Group created successfully");
    }
  );
};
const updateGroups = (req, res) => {
  const groupId = req.params.id;
  const { name, description, category_id } = req.body;
  if (!name || !description || !category_id) {
    res.status(400).send("Bad request");
    return;
  }
  connection.query(
    "UPDATE `Groups` SET name=?, description=?, category_id=? WHERE id=?",
    [name, description, category_id, groupId],
    (err, results) => {
      if (err) {
        console.error("Error executing MySQL query: " + err.stack);
        res.status(500).send("Internal server error");
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).send("Group not found");
        return;
      }
      res.status(200).send("Group updated successfully");
    }
  );
};
const deleteGroups = (req, res) => {
  const groupId = req.params.id;
  connection.query(
    "DELETE FROM `Groups` WHERE id = ?",
    [groupId],
    (err, results) => {
      if (err) {
        console.error("Error executing MySQL query: " + err.stack);
        res.status(500).send("Internal server error");
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).send("Group not found");
        return;
      }
      res.status(200).send("Group deleted successfully");
    }
  );
};

module.exports = {
  getAllGroups,
  createGroups,
  updateGroups,
  deleteGroups,
};
