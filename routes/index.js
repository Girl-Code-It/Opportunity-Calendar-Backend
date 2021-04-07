import express from 'express';
const router = express();

/**
 * @openapi
 * /:
 *    get:
 *      description: returns a 'hello world' response
 *      responses:
 *        200:
 *          description: Hello World
 */
router.get('/', (req, res) => {
  return res.send('Hello World');
});

export default router;
