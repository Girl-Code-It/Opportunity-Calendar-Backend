import { expect } from 'chai';
import sinon from 'sinon';
import stubValue from '../fakedata.js';
import Opportunity from '../../models/opportunity.js';
import OpportunityManager from '../../managers/opportunity/index.js';

describe('OpportunityManager', function () {
  describe('createOpportunity', function () {
    it('should add a new Opportunity to the Opportunity database', async function () {
      const stub = sinon.stub(Opportunity, 'create').returns(stubValue);
      const opportunityManager = new OpportunityManager();
      const opportunity = await opportunityManager.createOpportunity(
        stubValue.opportunityTitle,
        stubValue.opportunityType,
        stubValue.opportunityOrganisation,
        stubValue.opportunityLocation,
        stubValue.opportunityDescription,
        stubValue.opportunityEligibility,
        stubValue.opportunityRegistrationDeadline,
        stubValue.opportunityDate,
        stubValue.opportunityURL,
        stubValue.onlyForFemale
      );
      expect(stub.calledOnce).to.be.true;
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
      const stub = sinon.stub(Opportunity, 'find').returns(stubValue);
      const stubCountDocuments = sinon.stub(Opportunity, 'countDocuments').returns({
        exec : async () => 10
      });
      
      const opportunityManager = new OpportunityManager();
      const opportunity = (
        await opportunityManager.getOpportunities({
          type: stubValue.opportunityType,
        })
        ).results;
        
      
      expect(stubCountDocuments.calledOnce).to.be.true;
      expect(stub.calledOnce).to.be.true;
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
    it('should update existing Opportunity', async function () {
      const stub = sinon.stub(Opportunity, 'updateOne').returns(stubValue);
      const opportunityManager = new OpportunityManager();
      const queryObject = { _id: stubValue._id };
      const updatingobject = {
        opportunityTitle: stubValue.opportunityTitle,
        opportunityType: stubValue.opportunityType,
        opportunityOrganisation: stubValue.opportunityOrganisation,
        opportunityLocation: stubValue.opportunityLocation,
        opportunityDescription: stubValue.opportunityDescription,
        opportunityEligibility: stubValue.opportunityEligibility,
        opportunityRegistrationDeadline:
          stubValue.opportunityRegistrationDeadline,
        opportunityDate: stubValue.opportunityDate,
        opportunityURL: stubValue.opportunityURL,
      };
      const updatedOpportunity = await opportunityManager.updateOpportunity(
        queryObject,
        updatingobject
      );
      expect(stub.calledOnce).to.be.true;

      expect(updatedOpportunity.opportunityTitle).to.equal(
        stubValue.opportunityTitle
      );
      expect(updatedOpportunity.opportunityType).to.equal(
        stubValue.opportunityType
      );
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
      expect(updatedOpportunity.opportunityDate).to.equal(
        stubValue.opportunityDate
      );
      expect(updatedOpportunity.opportunityURL).to.equal(
        stubValue.opportunityURL
      );
      expect(updatedOpportunity.createdAt).to.equal(stubValue.createdAt);
      expect(updatedOpportunity.updatedAt).to.equal(stubValue.updatedAt);
    });
  });
});
