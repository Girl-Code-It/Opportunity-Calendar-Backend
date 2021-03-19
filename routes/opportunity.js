let express = require('express'),
  router = express.Router(),
  OpportunityManager = require('../managers/opportunity'),
  OpportunityService = require('../services/opportunity'),
  OpportunityController = require('../controllers/opportunity');

const opportunityManager = new OpportunityManager(),
  opportunityService = new OpportunityService(opportunityManager),
  opportunityController = new OpportunityController(opportunityService);

//Post Opportunity API
router.post('/', (req, res) => {
  console.log('Inside Route');
  opportunityController.createOpportunity(req, res);
});

module.exports = router;
