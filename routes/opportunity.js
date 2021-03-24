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
 *    summary: Creates a new opportunity 
 *    description: Creates a new opportunity in database
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - opportunityType
 *              - opportunityTitle
 *              - opportunityOrganisation
 *              - opportunityDescription
 *              - opportunityURL
 *            properties:
 *              opportunityId:
 *                type: string
 *                description: The ID of the opportunity
 *              opportunityTitle:
 *                type: string
 *                description: Title of the opportunity
 *              opportunityType:
 *                type: string
 *                description: Type of the opportunity
 *              opportunityOrganisation:
 *                type: string
 *                description: Name of organisation providing the opportunity
 *              opportunityLocation:
 *                type: string
 *                description: Location of the opportunity
 *              opportunityDescription:
 *                type: string
 *                description: Description of the opportunity
 *              opportunityEligibility:
 *                type: string
 *                description: Eligibility for the opportunity
 *              opportunityRegistrationDeadline:
 *                type: string
 *                format: date
 *                description: Registration Deadline for the opportunity
 *              opportunityDate:
 *                type: string
 *                format: date
 *                description: Date of the opportunity
 *              opportunityURL:
 *                type: string
 *                description: URL of the opportunity
 * 
 *    responses:
 *      201:
 *        description: Opportunity is successfully created!
 *      400:
 *        description: Sorry, opportunity could not be created!
 */
router.post('/', (req, res) => {
  console.log('Inside Route');
  opportunityController.createOpportunity(req, res);
});

module.exports = router;
