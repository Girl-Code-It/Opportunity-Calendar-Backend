const chai = require("chai");
const sinon = require("sinon");
const OpportunityManager = require("../managers/opportunity/index");
const expect = chai.expect;
var stubValue=require("./fakedata")
const OpportunityService = require("../services/opportunity/index");

describe("OpportunityService", function() {
  describe("create", function() {
    it("should create a new Opprtunity", async function() {
      const opportunityManager=new OpportunityManager();
      const stub = sinon.stub(opportunityManager, "createOpportunity").returns(stubValue);
      const opportunityService=new OpportunityService(opportunityManager)
      const opportunity = await opportunityService.createOpportunity(stubValue.opportunityId,stubValue.opportunityTitle,stubValue.opportunityType
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
    const opportunityManager=new OpportunityManager();
    const stub = sinon.stub(opportunityManager, "getOpportunities").returns(stubValue);
    const opportunityService=new OpportunityService(opportunityManager)
    const opportunity = await opportunityService.getOpportunities({"type":stubValue.opportunityType});;        
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
