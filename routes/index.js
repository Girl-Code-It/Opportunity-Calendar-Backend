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
router.get('/', loggedIn, (req, res) => {
  return res.send('Hello World');
});

router.get('/login/:token',(req,res)=>{
  return res.send(req.params.token);
})

module.exports = router;
