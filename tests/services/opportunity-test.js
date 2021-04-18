import chai from 'chai';
import sinon from 'sinon';
import stubValue from '../fakedata.js';
import OpportunityManager from '../../managers/opportunity/index.js';
const expect = chai.expect;
import OpportunityService from '../../services/opportunity/index.js';

describe('OpportunityService', function () {
  describe('create', function () {
    it('should create a new Opportunity', async function () {
      const opportunityManager = new OpportunityManager();
      const stub = sinon
        .stub(opportunityManager, 'createOpportunity')
        .returns(stubValue);
      const opportunityService = new OpportunityService(opportunityManager);
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
      const opportunityManager = new OpportunityManager();
      const stub = sinon
        .stub(opportunityManager, 'getOpportunities')
        .returns(stubValue);
      const opportunityService = new OpportunityService(opportunityManager);
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

  describe('updateOpportunity', function () {
    it('should update existing Opportunit', async function () {
      const opportunityManager = new OpportunityManager();
      const stub = sinon
        .stub(opportunityManager, 'updateOpportunity')
        .returns(stubValue);
      const opportunityService = new OpportunityService(opportunityManager);
      const queryObject={opportunityId:stubValue.opportunityId};
      const updatedOpportunity = await opportunityService.updateOpportunity(queryObject,
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
      expect(updatedOpportunity.opportunityId).to.equal(stubValue.opportunityId);
      expect(updatedOpportunity.opportunityTitle).to.equal(stubValue.opportunityTitle);
      expect(updatedOpportunity.opportunityType).to.equal(stubValue.opportunityType);
      expect(updatedOpportunity.opportunityOrganisation).to.equal(
        stubValue.opportunityOrganisation
      );
      expect(updatedOpportunity.opportunityLocation).to.equal(
        stubValue.opportunityLocation
      );
      expect(updatedOpportunity.opportunityDescription).to.equal(
        stubValue.opportunityDescription
      );
      expect(updatedOpportunity.opportunityRegistrationDeadline).to.equal(
        stubValue.opportunityRegistrationDeadline
      );
      expect(updatedOpportunity.opportunityDate).to.equal(stubValue.opportunityDate);
      expect(updatedOpportunity.opportunityURL).to.equal(stubValue.opportunityURL);
      expect(updatedOpportunity.createdAt).to.equal(stubValue.createdAt);
      expect(updatedOpportunity.updatedAt).to.equal(stubValue.updatedAt);
    });
  });
});