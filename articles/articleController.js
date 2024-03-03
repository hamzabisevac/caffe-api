const connection = require("../db/db");

const getAllArticles = (req, res) => {
  connection.query("SELECT * FROM Articles", (err, results) => {
    if (err) {
      console.error("Error executing MySQL query: " + err.stack);
      res.status(500).send("Error fetching articles");
      return;
    }
    res.status(200).json(results);
  });
};
const postCreateArticle = (req, res) => {
  const { name, description, group_id } = req.body;
  if (!name || !description || !group_id) {
    res.status(400).send("Bad request");
    return;
  }
  connection.query(
    "INSERT INTO Articles (name, description, group_id) VALUES (?, ?, ?)",
    [name, description, group_id],
    (err, results) => {
      if (err) {
        console.error("Error executing MySQL query: " + err.stack);
        res.status(500).send("Error creating article");
        return;
      }
      res.status(201).send("Article created successfully");
    }
  );
};
const getUpdateArticle = (req, res) => {
  const articleId = req.params.id;
  const { name, description, group_id } = req.body;
  if (!name || !description || !group_id) {
    res.status(400).send("Bad request");
    return;
  }
  connection.query(
    "UPDATE Articles SET name=?, description=?, group_id=? WHERE id=?",
    [name, description, group_id, articleId],
    (err, results) => {
      if (err) {
        console.error("Error executing MySQL query: " + err.stack);
        res.status(500).send("Error updating article");
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).send("Article not found");
        return;
      }
      res.status(200).send("Article updated successfully");
    }
  );
};
const getDeleteArticle = (req, res) => {
  const articleId = req.params.id;
  connection.query(
    "DELETE FROM Articles WHERE id=?",
    [articleId],
    (err, results) => {
      if (err) {
        console.error("Error executing MySQL query: " + err.stack);
        res.status(500).send("Error deleting article");
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).send("Article not found");
        return;
      }
      res.status(200).send("Article deleted successfully");
    }
  );
};

module.exports = {
  getAllArticles,
  postCreateArticle,
  getUpdateArticle,
  getDeleteArticle,
};
