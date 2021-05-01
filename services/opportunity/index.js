class opportunityService {
  constructor(opportunityManager) {
    this.opportunityManager = opportunityManager;
  }
  async createOpportunity(
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
  ) {
    console.log('Inside Service');

    try {
      let newOpportunity = await this.opportunityManager.createOpportunity(
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
      return newOpportunity;
    } catch (err) {
      console.log('ERROR IN postNewOpportunity OpportunityServices');
      throw err;
    }
  }

  async getOpportunities(queryObject) {
    console.log('Inside Service');

    try {
      let fetchedOpportunities = await this.opportunityManager.getOpportunities(
        queryObject
      );
      return fetchedOpportunities;
    } catch (err) {
      console.log('ERROR IN  getOpportunities OpportunityServices');
      throw err;
    }
  }

  async updateOpportunity(queryObject, updatingprops) {
    try {
      let updatedOpportunity = await this.opportunityManager.updateOpportunity(
        queryObject,
        updatingprops
      );
      return updatedOpportunity;
    } catch (err) {
      console.log('ERROR IN updatedOpportunity OpportunityServices');
      throw err;
    }
  }
}

export default opportunityService;
