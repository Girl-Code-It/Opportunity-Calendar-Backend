import express from 'express';
const router = express();
import  OpportunityManager from '../managers/opportunity/index.js';
import OpportunityService from '../services/opportunity/index.js';
import OpportunityController from '../controllers/opportunity/index.js';
  
  // OpportunityManager = require('../managers/opportunity'),
  // OpportunityService = require('../services/opportunity'),
  // OpportunityController = require('../controllers/opportunity');

const opportunityManager = new OpportunityManager(),
  opportunityService = new OpportunityService(opportunityManager),
  opportunityController = new OpportunityController(opportunityService);

/**
 * @swagger
 * /opportunity:
 *   get:
 *     summary: Retrieve a list of opportunities.
 *     description: Retrieve a list of opportunities.
 *     parameters:
 *      - in: query
 *        name: type
 *        schema:
 *          type: string
 *          enum:
 *             - HACKATHON
 *             - JOB
 *             - INTERNSHIP
 *             - SCHOLARSHIP
 *             - CONFERENCE
 *             - CODINGCOMPETITION
 *        description: Retrieve a list of opportunities based on particular type.
 *     responses:
 *       200:
 *         description: A list of opportunities.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Status of the request.
 *                   example: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       opportunityId:
 *                         type: string
 *                         description: The opportunity ID.
 *                         example: 3
 *                       opportunityType:
 *                         type: string
 *                         description: The opportunity type.
 *                         example: SCHOLARSHIP
 *                       opportunityLocation:
 *                         type: string
 *                         description: The venue of the event.
 *                         example: Chennai
 *                       opportunityDescription:
 *                         type: string
 *                         description: The description of the opportunity.
 *                         example: The Novice Coders Scholarship Program
 *                       opportunityEligibility:
 *                         type: string
 *                         description: Eligibility criteria of the opportunity.
 *                         example: Have no experience in coding
 *                       opportunityRegistrationDeadline:
 *                         type: string
 *                         description: Deadline for the event.
 *                         example: 2021-03-22T12:04:05.779Z
 *                       opportunityDate:
 *                         type: string
 *                         description: Date of the event.
 *                         example: 2021-03-22T12:04:05.779Z
 *                       opportunityTitle:
 *                         type: string
 *                         description: Name of the opportunity.
 *                         example: Rohith M S R Scholarship
 *                       opportunityURL:
 *                         type: string
 *                         description: Link for the opportunity.
 *                         example: www.rohithmsrscholarship.com
 *
 */
router.get('/', (req, res) => {
  console.log('Inside GET Route');
  opportunityController.getOpportunities(req, res);
});

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

export default router;
