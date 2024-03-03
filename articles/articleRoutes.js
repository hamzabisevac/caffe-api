/**
 * @swagger
 * /articles:
 *   get:
 *     tags: [Articles]
 *     summary: Get all articles
 *     description: Retrieve a list of all articles. You can filter articles by name or description.
 *     parameters:
 *       - in: query
 *         name: name
 *         description: Filter articles by name
 *         schema:
 *           type: string
 *       - in: query
 *         name: description
 *         description: Filter articles by description
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of articles
 */

/**
 * @swagger
 * /articles:
 *   post:
 *     tags: [Articles]
 *     summary: Create a new article
 *     description: Create a new article with the provided data
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
 *               group_id:
 *                 type: integer
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
 * /articles/{id}:
 *   put:
 *     tags: [Articles]
 *     summary: Update an existing article
 *     description: Update an existing article with the provided data
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the article to update
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
 *               group_id:
 *                 type: integer
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
 *         description: Article not found
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
 * /articles/{id}:
 *   delete:
 *     tags: [Articles]
 *     summary: Delete an article
 *     description: Delete an article with the provided ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the article to delete
 *         schema:
 *           type: integer
 *
 *
 *     responses:
 *       200:
 *         description: Article deleted successfully
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
const articleController = require("./articleController");

router.get("/", articleController.getAllArticles);
router.post("/", articleController.postCreateArticle);
router.put("/:id", articleController.getUpdateArticle);
router.delete("/:id", articleController.getDeleteArticle);
module.exports = router;
