/**
 * @swagger
 * /categories:
 *   get:
 *     tags: [Categories]
 *     summary: Get all categories
 *     description: Retrieve a list of all categories. You can filter categories by name or description.
 *     parameters:
 *       - in: query
 *         name: name
 *         description: Filter category by name
 *         schema:
 *           type: string
 *       - in: query
 *         name: description
 *         description: Filter category by description
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of categories
 *         content:
 *            application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                    name:
 *                      type: string
 *                    description:
 *                      type: string
 *                    group_id:
 *                      type: integer
 */

/**
 * @swagger
 * /categories:
 *   post:
 *     tags: [Categories]
 *     summary: Create a new category
 *     description: Create a new category with the provided data
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
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *            application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                    name:
 *                      type: string
 *                    description:
 *                      type: string
 *                    group_id:
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
 *
 */
/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     tags: [Categories]
 *     summary: Update an existing category
 *     description: Update an existing category with the provided data
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the category to update
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
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *            application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                    name:
 *                      type: string
 *                    description:
 *                      type: string
 *                    group_id:
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
 *         description: Category not found
 *         content:
 *            application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                         message:
 *                            type: string
 *
 */
/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     tags: [Categories]
 *     summary: Delete an category
 *     description: Delete an category with the provided ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the category to delete
 *         schema:
 *           type: integer
 *
 *
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *         content:
 *            application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                    name:
 *                      type: string
 *                    description:
 *                      type: string
 *                    group_id:
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
 *         description: Category not found
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
const categoryController = require("./categoryController");

router.get("/", categoryController.getAllCategories);
router.post("/", categoryController.createCategory);
router.put("/:id", categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory);
module.exports = router;
