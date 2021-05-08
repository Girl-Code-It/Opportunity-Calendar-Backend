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

/**
 * @swagger
 * /index:
 *   get:
 *     summary: Returns a 'hello world' response
 *     description: Returns a 'hello world' response
 *     responses:
 *       200:
 *       description: Hello World
 */

router.get('/', (req, res) => {
  return res.send('Hello World');
});

/**
 * @swagger
 * /index/loggedInChecker:
 *   get:
 *     summary: To check wheather user is loggedIn or not.
 *     description: Returns a 'hello world' response if user is loggedIn.
 *     responses:
 *       200:
 *       description: Hello World
 */

router.get('/loggedInChecker', loggedIn, (req, res) => {
  return res.send('Hello World');
});

/**
 * @swagger
 * /index/login/:token:
 *   get:
 *     summary: if the user is loggedIn will return a token.
 *     description: Returns a token response if the user is loggedIn.
 *     responses:
 *       200:
 *       description: A loggedIn token from request parameter.
 *       content: req.params.token 
 */

router.get('/login/:token', (req, res) => {
  return res.send(req.params.token);
});

/**
 * @swagger
 * /index/error/:token:
 *   get:
 *     summary: Return an error token.
 *     description: Returns an error token response.
 *     responses:
 *       200:
 *       description: An error token from request parameter.
 *       content: req.params.token 
 */

router.get('/error/:token', (req, res) => {
  return res.send(req.params.token);
});

export default router;
