import Opportunity from '../../models/opportunity.js';

class opportunityController {
  constructor(opportunityService) {
    this.opportunityService = opportunityService;
  }
  async createOpportunity(req, res) {
    console.log('Inside controller');
    console.log(req.body)
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
        opportunityURL
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

  //updateOpportunities
async updateOpportunity(req,res){


  let opId=req.params.opId;
  let queryObject={_id:opId}
  let updatingprops=req.body;
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
