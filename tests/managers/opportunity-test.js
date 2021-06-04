import { expect } from 'chai';
import sinon from 'sinon';
import { stubValue, fakedataArray } from '../fakedata.js';
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
        stubValue.onlyForFemale,
        stubValue.organisationLogoURL
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
      expect(opportunity.organisationLogoURL).to.equal(
        stubValue.organisationLogoURL
      );
    });
  });

  describe('getOpportunities', function () {
    const stub = sinon.stub(Opportunity, 'find').returns(fakedataArray);

    const stubCountDocuments = sinon
      .stub(Opportunity, 'countDocuments')
      .returns({
        exec: async () => 10,
      });

    const opportunityManager = new OpportunityManager();

    it('should retrieve Opportunities with specific opportunityType', async function () {
      const result = await opportunityManager.getOpportunities({
        type: stubValue.opportunityType,
      });

      const opportunity = result.results[0];

      expect(stubCountDocuments.calledOnce).to.be.true;
      expect(stub.calledOnce).to.be.true;
      expect(result.results.length).to.equal(4);
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
      expect(opportunity.organisationLogoURL).to.equal(
        stubValue.organisationLogoURL
      );
    });

    it('should have a next page', async function () {
      const result = await opportunityManager.getOpportunities({
        type: stubValue.opportunityType,
        limit: 2,
      });

      expect(result.next).to.be.an('object');
    });

    it('should warn for exeeding page limit', async function () {
      const result = await opportunityManager.getOpportunities({
        type: stubValue.opportunityType,
        page: 2,
      });

      expect(result.results).to.equal('The maximum allowed pages are 1');
    });

    it('should have a previous page', async function () {
      const result = await opportunityManager.getOpportunities({
        type: stubValue.opportunityType,
        limit: 2,
        page: 2,
      });

      expect(result.previous).to.be.an('object');
    });

    it('should not have negative parameters', async function () {
      const result = await opportunityManager.getOpportunities({
        type: stubValue.opportunityType,
        limit: -9,
        page: -7,
      });

      expect(result.results).to.equal(
        'The Parameters cannot be Negative or Zero'
      );
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
        organisationLogoURL: stubValue.organisationLogoURL,
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
      expect(updatedOpportunity.organisationLogoURL).to.equal(
        stubValue.organisationLogoURL
      );
    });
  });

  describe('deleteOpportunity', function () {
    it('should delete existing Opportunity', async function () {
      const stub = sinon
        .stub(Opportunity, 'findByIdAndRemove')
        .returns(stubValue);
      const opportunityManager = new OpportunityManager();
      const queryObject = { _id: stubValue._id };

      const deletedOpportunity = await opportunityManager.deleteOpportunity(
        queryObject
      );
      
      it('should not delete if Opportunity does not exist', function() {

        expect(deletedOpportunity).to.be.true; // checks if deletedOpportunity is present
        
        expect(deletedOpportunity._id).to.equal( // checks if deletedOpporutnityId is equal to stubValueId
          stubValue._id
        );

      })

      expect(stub.calledOnce).to.be.true;

      expect(deletedOpportunity.opportunityTitle).to.equal(
        stubValue.opportunityTitle
      );
      expect(deletedOpportunity.opportunityType).to.equal(
        stubValue.opportunityType
      );
      expect(deletedOpportunity.opportunityOrganisation).to.equal(
        stubValue.opportunityOrganisation
      );
      expect(deletedOpportunity.opportunityLocation).to.equal(
        stubValue.opportunityLocation
      );
      expect(deletedOpportunity.opportunityDescription).to.equal(
        stubValue.opportunityDescription
      );
      expect(deletedOpportunity.opportunityRegistrationDeadline).to.equal(
        stubValue.opportunityRegistrationDeadline
      );

      expect(deletedOpportunity.organisationLogoURL).to.equal(
        stubValue.organisationLogoURL
      );
    });
  });
});
