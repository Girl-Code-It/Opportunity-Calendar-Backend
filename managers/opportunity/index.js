import pagination from '../../helpers/pagination.js';
import Opportunity from '../../models/opportunity.js';
class opportunityManager {
  constructor() {
    this.opportunity = Opportunity;
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
    let opportunity = {
      opportunityTitle: opportunityTitle,
      opportunityType: opportunityType,
      opportunityOrganisation: opportunityOrganisation,
      opportunityLocation: opportunityLocation,
      opportunityDescription: opportunityDescription,
      opportunityEligibility: opportunityEligibility,
      opportunityRegistrationDeadline: opportunityRegistrationDeadline,
      opportunityDate: opportunityDate,
      opportunityURL: opportunityURL,
      onlyForFemale: onlyForFemale,
      organisationLogoURL: organisationLogoURL,
    };

    try {
      let newOpportunity = await this.opportunity.create(opportunity);
      return newOpportunity;
    } catch (err) {
      console.log('ERR postNewOpportunity: ', err.stack);
      throw err;
    }
  }

  async getOpportunities(queryObject) {
    try {
      return pagination(queryObject, this.opportunity);
    } catch (err) {
      console.log('ERR getOpportunities: ', err.stack);
      throw err;
    }
  }

  async deleteOpportunity(opportunity_id) {
    try {
      let deletedDocument = await this.opportunity.findByIdAndRemove(
        opportunity_id
      );
      return deletedDocument;
    } catch (err) {
      console.log('ERROR IN deleteOpportunity MANAGER');
      throw err;
    }
  }

  async updateOpportunity(queryObject, updatingprops) {
    try {
      let updatedOpportunity = await this.opportunity.updateOne(queryObject, {
        $set: updatingprops,
      });
      return updatedOpportunity;
    } catch (err) {
      console.log('ERR UpdatingOpportunity: ', err.stack);
      throw err;
    }
  }
}

export default opportunityManager;
