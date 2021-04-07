import chai from 'chai';
import sinon from 'sinon';
import stubValue from './fakedata.js';
import opportunityManager from '../managers/opportunity/index.js';
const expect = chai.expect;
import OpportunityService from '../services/opportunity/index.js';

describe('OpportunityService', function () {
  describe('create', function () {
    it('should create a new Opprtunity', async function () {
      const OpportunityManager = new opportunityManager();
      const stub = sinon
        .stub(OpportunityManager, 'createOpportunity')
        .returns(stubValue);
      const opportunityService = new OpportunityService(OpportunityManager);
      const opportunity = await opportunityService.createOpportunity(
        stubValue.opportunityId,
        stubValue.opportunityTitle,
        stubValue.opportunityType,
        stubValue.opportunityOrganisation,
        stubValue.opportunityLocation,
        stubValue.opportunityDescription,
        stubValue.opportunityEligibility,
        stubValue.opportunityRegistrationDeadline,
        stubValue.opportunityDate,
        stubValue.opportunityURL
      );
      expect(stub.calledOnce).to.be.true;
      expect(opportunity.opportunityId).to.equal(stubValue.opportunityId);
      expect(opportunity.opportunityTitle).to.equal(stubValue.opportunityTitle);
      expect(opportunity.opportunityType).to.equal(stubValue.opportunityType);
      expect(opportunity.opportunityOrganisation).to.equal(
        stubValue.opportunityOrganisation
      );
      expect(opportunity.opportunityLocation).to.equal(
        stubValue.opportunityLocation
      );
      expect(opportunity.opportunityDescription).to.equal(
        stubValue.opportunityDescription
      );
      expect(opportunity.opportunityRegistrationDeadline).to.equal(
        stubValue.opportunityRegistrationDeadline
      );
      expect(opportunity.opportunityDate).to.equal(stubValue.opportunityDate);
      expect(opportunity.opportunityURL).to.equal(stubValue.opportunityURL);
      expect(opportunity.createdAt).to.equal(stubValue.createdAt);
      expect(opportunity.updatedAt).to.equal(stubValue.updatedAt);
    });
  });

  describe('getOpportunities', function () {
    it('should retrieve Opportunities with specific opportunityType', async function () {
      const OpportunityManager = new opportunityManager();
      const stub = sinon
        .stub(OpportunityManager, 'getOpportunities')
        .returns(stubValue);
      const opportunityService = new OpportunityService(OpportunityManager);
      const opportunity = await opportunityService.getOpportunities({
        type: stubValue.opportunityType,
      });
      expect(stub.calledOnce).to.be.true;
      expect(opportunity.opportunityId).to.equal(stubValue.opportunityId);
      expect(opportunity.opportunityTitle).to.equal(stubValue.opportunityTitle);
      expect(opportunity.opportunityType).to.equal(stubValue.opportunityType);
      expect(opportunity.opportunityOrganisation).to.equal(
        stubValue.opportunityOrganisation
      );
      expect(opportunity.opportunityLocation).to.equal(
        stubValue.opportunityLocation
      );
      expect(opportunity.opportunityDescription).to.equal(
        stubValue.opportunityDescription
      );
      expect(opportunity.opportunityRegistrationDeadline).to.equal(
        stubValue.opportunityRegistrationDeadline
      );
      expect(opportunity.opportunityDate).to.equal(stubValue.opportunityDate);
      expect(opportunity.opportunityURL).to.equal(stubValue.opportunityURL);
      expect(opportunity.createdAt).to.equal(stubValue.createdAt);
      expect(opportunity.updatedAt).to.equal(stubValue.updatedAt);
    });
  });
});
