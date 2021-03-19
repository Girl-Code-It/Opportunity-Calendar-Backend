let Opportunity = require('../../models/opportunity');

class opportunityController {
  constructor(opportunityService) {
    this.opportunityService = opportunityService;
  }
  async createOpportunity(req, res) {
    console.log('Inside controller');
    const {
      opportunityId,
      opportunityTitle,
      opportunityType,
      opportunityOrganisation,
      opportunityLocation,
      opportunityDescription,
      opportunityEligibility,
      opportunityRegistrationDeadline,
      opportunityDate,
      opportunityURL,
    } = req.body;

    try {
      let newOpportunity = await this.opportunityService.createOpportunity(
        opportunityId,
        opportunityTitle,
        opportunityType,
        opportunityOrganisation,
        opportunityLocation,
        opportunityDescription,
        opportunityEligibility,
        opportunityRegistrationDeadline,
        opportunityDate,
        opportunityURL,
      );

      return res.status(201).json({
        data: newOpportunity,
      });
    } catch (err) {
      console.log('ERROR IN postNewOpportunity OpportunityController', err);
      return res.status(400).send(err);
    }
  }
}

module.exports = opportunityController;
