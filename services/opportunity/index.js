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
    onlyForFemale,
    organisationLogoURL
  ) {
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
        onlyForFemale,
        organisationLogoURL
      );
      return newOpportunity;
    } catch (err) {
      console.log('ERROR IN postNewOpportunity OpportunityServices');
      throw err;
    }
  }

  async getOpportunities(queryObject) {
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

  async deleteOpportunity(opportunity_id) {
    try {
      let deletedDocument = await this.opportunityManager.deleteOpportunity(
        opportunity_id
      );
      return deletedDocument;
    } catch (err) {
      console.log('ERROR IN deleteOpportunity Service');
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
