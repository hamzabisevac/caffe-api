/**
 * @swagger
 * /orders:
 *   get:
 *     tags: [Orders]
 *     summary: Get all orders
 *     description: Retrieve a list of all orders. You can filter orders by name or description.
 *     parameters:
 *       - in: query
 *         name: name
 *         description: Filter orders by name
 *         schema:
 *           type: string
 *       - in: query
 *         name: description
 *         description: Filter orders by description
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of orders
 *         content:
 *            application/json:
 *               schema:
 *                  properties:
 *                    items:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      articleId:
 *                        type: integer
 *                      price:
 *                        type: number
 *                      quantity:
 *                        type: integer
 */
const express = require("express");
const router = express.Router();
const ordersController = require("./ordersController");

router.get("/", ordersController.getAllOrders);
module.exports = router;
