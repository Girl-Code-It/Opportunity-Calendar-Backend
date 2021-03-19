let express = require('express'),
  router = express.Router();

router.get('/', (req, res) => {
  return res.send('Connected to INDEX API');
});

module.exports = router;
