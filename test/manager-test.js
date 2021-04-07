
import {expect} from 'chai'
import sinon from 'sinon'
import stubValue from './fakedata.js'
import Opportunity from '../models/opportunity.js'
import OpportunityManager from "../managers/opportunity/index.js"
describe("OpprtunityManager", function() {

  describe("createOpportunity", function() {
    it("should add a new Opportunity to the Opportunity database", async function() {
      const stub = sinon.stub(Opportunity, "create").returns(stubValue);
      const opportunityManager=new OpportunityManager();
      const opportunity = await opportunityManager.createOpportunity(stubValue.opportunityId,stubValue.opportunityTitle,stubValue.opportunityType
         ,stubValue.opportunityOrganisation,stubValue.opportunityLocation,stubValue.opportunityDescription,stubValue.opportunityEligibility,stubValue.opportunityRegistrationDeadline
         ,stubValue.opportunityDate,stubValue.opportunityURL);
      expect(stub.calledOnce).to.be.true;
      expect(opportunity.opportunityId).to.equal(stubValue.opportunityId);
      expect(opportunity.opportunityTitle).to.equal(stubValue.opportunityTitle);
      expect(opportunity.opportunityType).to.equal(stubValue.opportunityType);
      expect(opportunity.opportunityOrganisation).to.equal(stubValue.opportunityOrganisation);
      expect(opportunity.opportunityLocation).to.equal(stubValue.opportunityLocation);
      expect(opportunity.opportunityDescription).to.equal(stubValue.opportunityDescription);
      expect(opportunity.opportunityRegistrationDeadline).to.equal(stubValue.opportunityRegistrationDeadline);
      expect(opportunity.opportunityDate).to.equal(stubValue.opportunityDate);
      expect(opportunity.opportunityURL).to.equal(stubValue.opportunityURL);
      expect(opportunity.createdAt).to.equal(stubValue.createdAt);
      expect(opportunity.updatedAt).to.equal(stubValue.updatedAt);
    });
  });

  describe("getOpportunities", function() {
    it("should retrieve Opportunities with specific opportunityType", async function() {
      const stub = sinon.stub(Opportunity, "find").returns(stubValue);
      const opportunityManager=new OpportunityManager();
      const opportunity = await opportunityManager.getOpportunities({"type":stubValue.opportunityType});
      expect(stub.calledOnce).to.be.true;
      expect(opportunity.opportunityId).to.equal(stubValue.opportunityId);
      expect(opportunity.opportunityTitle).to.equal(stubValue.opportunityTitle);
      expect(opportunity.opportunityType).to.equal(stubValue.opportunityType);
      expect(opportunity.opportunityOrganisation).to.equal(stubValue.opportunityOrganisation);
      expect(opportunity.opportunityLocation).to.equal(stubValue.opportunityLocation);
      expect(opportunity.opportunityDescription).to.equal(stubValue.opportunityDescription);
      expect(opportunity.opportunityRegistrationDeadline).to.equal(stubValue.opportunityRegistrationDeadline);
      expect(opportunity.opportunityDate).to.equal(stubValue.opportunityDate);
      expect(opportunity.opportunityURL).to.equal(stubValue.opportunityURL);
      expect(opportunity.createdAt).to.equal(stubValue.createdAt);
      expect(opportunity.updatedAt).to.equal(stubValue.updatedAt);
    });
  });

});

