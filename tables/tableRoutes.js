/**
 * @swagger
 * /tables:
 *    post:
 *      tags: [Tables]
 *      summary: Create table
 *      description: Create a new table
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *      responses:
 *        201:
 *          description: Table created successfully
 *        400:
 *          description: Bad request
 *        500:
 *          description: Internal server error
 */

/**
 * @swagger
 * /tables/{tableId}/order:
 *    post:
 *      tags: [Tables]
 *      summary: Create order
 *      description: Create a new order on the specified table
 *      parameters:
 *        - in: path
 *          name: tableId
 *          required: true
 *          description: ID of the table to create order on
 *          schema:
 *            type: integer
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                items:
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
 *      responses:
 *        201:
 *          description: Order placed successfully
 *        400:
 *          description: Bad request
 *        500:
 *          description: Internal server error
 */

/**
 * @swagger
 * /tables/{tableId}/pay:
 *    post:
 *      tags: [Tables]
 *      summary: Pay order
 *      description: Pay for all items on the specified table
 *      parameters:
 *        - in: path
 *          name: tableId
 *          required: true
 *          description: ID of the table to pay for
 *          schema:
 *            type: integer
 *      responses:
 *        200:
 *          description: Payment successful
 *        404:
 *          description: Table not found or no pending orders for this table
 *        500:
 *          description: Internal server error
 */
const express = require("express");
const router = express.Router();
const tableController = require("./tableController");

router.post("/", tableController.createTable);
router.post("/:tableId/order", tableController.createOrder);
router.post("/:tableId/pay", tableController.payOrder);
module.exports = router;
