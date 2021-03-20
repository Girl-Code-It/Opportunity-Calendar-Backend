let express = require('express'),
  router = express.Router();

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

module.exports = router;
