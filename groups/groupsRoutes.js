/**
 * @swagger
 * /groups:
 *   get:
 *     tags: [Groups]
 *     summary: Get all groups
 *     description: Retrieve all groups
 *     parameters:
 *       - in: query
 *         name: name
 *         description: Filter groups by name
 *         schema:
 *           type: string
 *       - in: query
 *         name: description
 *         description: Filter groups by description
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of groups
 *         content:
 *            application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                    name:
 *                      type: string
 *                    description:
 *                      type: string
 *                    category_id:
 *                      type: integer
 *       500:
 *         description: Internal server error
 *         content:
 *            application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                    message:
 *                      type: string
 */

/**
 * @swagger
 * /groups:
 *   post:
 *     tags: [Groups]
 *     summary: Create a new group
 *     description: Create a new group with the provided data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               category_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Group created successfully
 *         content:
 *            application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                    name:
 *                      type: string
 *                    description:
 *                      type: string
 *                    category_id:
 *                      type: integer
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      error:
 *                        type: string
 *                      message:
 *                        type: string
 *       500:
 *          descripton: Internal Server Error
 *          content:
 *             application/json:
 *                 schema:
 *                    type: object
 *                    properties:
 *                          message:
 *                            type: string
 */
/**
 * @swagger
 * /groups/{id}:
 *   put:
 *     tags: [Groups]
 *     summary: Update an existing group
 *     description: Update an existing group with the provided data
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the group to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               category_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Group details
 *         content:
 *            application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                    name:
 *                      type: string
 *                    description:
 *                      type: string
 *                    category_id:
 *                      type: integer
 *       400:
 *         description: Bad request
 *         content:
 *            application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                     message:
 *                       type: string
 *       404:
 *         description: Article not found
 *         content:
 *            application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                         message:
 *                            type: string
 */

/**
 * @swagger
 * /groups/{id}:
 *   delete:
 *     tags: [Groups]
 *     summary: Delete a group
 *     description: Delete a group with the provided ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the group to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Group deleted successfully
 *         content:
 *            application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                    name:
 *                      type: string
 *                    description:
 *                      type: string
 *                    category_id:
 *                      type: integer
 *       400:
 *         description: Bad request
 *         content:
 *            application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                     message:
 *                       type: string
 *       404:
 *         description: Article not found
 *         content:
 *            application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                         message:
 *                            type: string
 */
const express = require("express");
const router = express.Router();
const groupsController = require("./groupsController");

router.get("/", groupsController.getAllGroups);
router.post("/", groupsController.createGroups);
router.put("/:id", groupsController.updateGroups);
router.delete("/:id", groupsController.deleteGroups);

module.exports = router;
