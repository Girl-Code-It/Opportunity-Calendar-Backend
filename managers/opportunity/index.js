let Opportunity = require('../../models/opportunity');

class opportunityManager {
  constructor() {
    this.opportunity = Opportunity;
  }
  async createOpportunity(
    opportunityId,
    opportunityTitle,
    opportunityType,
    opportunityOrganisation,
    opportunityLocation,
    opportunityDescription,
    opportunityEligibility,
    opportunityRegistrationDeadline,
    opportunityDate,
    opportunityURL
  ) {
    console.log('Inside Manager', opportunityId);
    let opportunity = {
      opportunityId: opportunityId,
      opportunityTitle: opportunityTitle,
      opportunityType: opportunityType,
      opportunityOrganisation: opportunityOrganisation,
      opportunityLocation: opportunityLocation,
      opportunityDescription: opportunityDescription,
      opportunityEligibility: opportunityEligibility,
      opportunityRegistrationDeadline: opportunityRegistrationDeadline,
      opportunityDate: opportunityDate,
      opportunityURL: opportunityURL,
    };
    console.log('Values received in manager', opportunity);

    try {
      let newOpportunity = await this.opportunity.create(opportunity);
      return newOpportunity;
    } catch (err) {
      console.log('ERROR IN postNewOpportunity OpportunityMANAGER');
      throw err;
    }
  }

  async getOpportunities(queryObject) {
    try {
      if (queryObject.type) {
        queryObject['opportunityType'] = queryObject.type;
        delete queryObject.type;
      }
      console.log('Values in QueryString', queryObject);

      let fetchedOpportunitiesQuery = this.opportunity.find(queryObject);
      return fetchedOpportunitiesQuery;
    } catch (err) {
      console.log('ERROR IN getOpportunities OpportunityMANAGER');
      throw err;
    }
  }
}

module.exports = opportunityManager;
