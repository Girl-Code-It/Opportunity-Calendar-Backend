let express = require('express'),
  router = express.Router(),
  OpportunityManager = require('../managers/opportunity'),
  OpportunityService = require('../services/opportunity'),
  OpportunityController = require('../controllers/opportunity');

const opportunityManager = new OpportunityManager(),
  opportunityService = new OpportunityService(opportunityManager),
  opportunityController = new OpportunityController(opportunityService);

/**
 * @openapi
 * /opportunity:
 *  post:
 *    summary: create a new opportunity 
 *    description: creates a new opportunity in database
 *    parameters:
 *      - in: body
 *        name: name
 *        description: name of the opportunity
 *        schema:
 *          type: string
 *        required: true
 *    responses:
 *      200:
 *        description: document the API response on success here
 *            
 */
router.post('/', (req, res) => {
  console.log('Inside Route');
  opportunityController.createOpportunity(req, res);
});

module.exports = router;
