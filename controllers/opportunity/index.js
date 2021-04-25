import Opportunity from '../../models/opportunity.js';

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
      onlyForFemale,
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
        onlyForFemale
      );

      return res.status(201).json({
        data: newOpportunity,
      });
    } catch (err) {
      console.log('ERROR IN postNewOpportunity OpportunityController', err);
      return res.status(400).send(err);
    }
  }

  //getOpportunities
  async getOpportunities(req, res) {
    console.log('Inside controller');
    const queryObject = { ...req.query };

    try {
      let fetchedOpportunities = await this.opportunityService.getOpportunities(
        queryObject
      );

      return res.status(200).json({
        status: 'success',
        data: fetchedOpportunities,
      });
    } catch (err) {
      console.log('ERROR IN getOpportunities OpportunityController', err);
      return res.status(400).json({
        status: 'fail',
        error: err.message,
      });
    }
  }
}

export default opportunityController;
