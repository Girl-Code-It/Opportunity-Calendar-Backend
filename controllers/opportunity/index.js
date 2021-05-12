import Opportunity from '../../models/opportunity.js';

class opportunityController {
  constructor(opportunityService) {
    this.opportunityService = opportunityService;
  }
  async createOpportunity(req, res) {
    const {
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
      organisationLogoURL,
    } = req.body;

    try {
      let newOpportunity = await this.opportunityService.createOpportunity(
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
        organisationLogoURL
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

  // delete oppertunity
  async deleteOpportunity(req, res) {
    console.log('Inside controller');
    const opportunity_id = req.params.opportunity_id;
    try {
      let deletedOpportunity = await this.opportunityService.deleteOpportunity(
        opportunity_id
      );
      return res.status(200).json({
        status: 'success',
        data: deletedOpportunity,
      });
    } catch (err) {
      console.log('ERROR IN deleteOpportunity OpportunityController', err);
      return res.status(400).json({
        status: 'fail',
        error: err.message,
      });
    }
  }

  //updateOpportunities
  async updateOpportunity(req, res) {
    let opportunity_id = req.params.opportunity_id;
    let queryObject = { _id: opportunity_id };
    let updatingprops = req.body;
    try {
      let updatedOpportunity = await this.opportunityService.updateOpportunity(
        queryObject,
        updatingprops
      );

      return res.status(201).json({
        data: updatedOpportunity,
      });
    } catch (err) {
      console.log('ERROR IN updating Opportunity OpportunityController', err);
      return res.status(400).send(err);
    }
  }
}

export default opportunityController;
