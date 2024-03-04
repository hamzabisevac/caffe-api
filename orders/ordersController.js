const connection = require("../db/db");
const { stack } = require("../groups/groupsRoutes");

const getAllOrders = (req, res) => {
  connection.query("SELECT * FROM Orders", (err, result) => {
    if (err) {
      console.error("Error executing MySQL query: ", +err.stack);
      res.status(500).send("Internal server error");
      return;
    }
    res.status(200).json(result);
  });
};
module.exports = {
  getAllOrders,
};
