import Opportunity from '../../models/opportunity.js';
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
      // Filter based on opportunityType
      if (queryObject.type) {
        queryObject['opportunityType'] = queryObject.type;
        delete queryObject.type;
      }
      console.log('Values in QueryString', queryObject);

      let fetchedOpportunitiesQuery = this.opportunity.find(queryObject);
      // fetchedOpportunitiesQuery.select('-__v');
      // fetchedOpportunitiesQuery.select('-_id');

      return fetchedOpportunitiesQuery;
    } catch (err) {
      console.log('ERROR IN getOpportunities OpportunityMANAGER');
      throw err;
    }
  }


  async updateOpportunity(
    queryObject,
    updatingprops
  ){


    try {
      let updatedOpportunity = await this.opportunity.updateOne(queryObject,{
        $set:updatingprops
      });
      return updatedOpportunity;
    } catch (err) {
      console.log('ERROR IN UpdatingOpportunity OpportunityMANAGER');
      throw err;
    }

  }
}

export default opportunityManager;
