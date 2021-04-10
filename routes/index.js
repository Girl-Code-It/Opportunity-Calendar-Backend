import express from 'express';
const router = express();
import {loggedIn} from '../middleware/auth.js'
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


router.get('/loggedInChecker', loggedIn, (req, res) => {
  return res.send('Hello World');
});


router.get('/login/:token', (req, res) => {
  return res.send(req.params.token);
});

router.get('/error/:token', (req, res) => {
  return res.send(req.params.token);
});

export default router;
