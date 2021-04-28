import { expect } from 'chai';
import sinon from 'sinon';
import stubValue from '../fakedata.js';
import OpportunityService from '../../services/opportunity/index.js';
import OpportunityController from '../../controllers/opportunity/index.js';

describe('OpportunityController', function () {
  describe('Create Opportunity', function () {
    let status, json, res, opportunityController, opportunityService;
    beforeEach(() => {
      status = sinon.stub();
      json = sinon.spy();
      res = {
        json,
        status,
      };
      status.returns(res);
      const opportunityManager = sinon.spy();
      opportunityService = new OpportunityService(opportunityManager);
    });

    it('should add a new Opportunity to the Opportunity database', async function () {
      const req = {
        body: {
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
          onlyForFemale: stubValue.onlyForFemale,
        },
      };

      const stub = sinon
        .stub(opportunityService, 'createOpportunity')
        .returns(stubValue);
      opportunityController = new OpportunityController(opportunityService);
      await opportunityController.createOpportunity(req, res);
      expect(stub.calledOnce).to.be.true;
      expect(status.calledOnce).to.be.true;
      expect(status.firstCall.args[0]).to.equal(201);
      expect(json.calledOnce).to.be.true;
      expect(json.firstCall.args[0].data).to.equal(stubValue);
    });
  });

  describe('getOpportunity', function () {
    let status, json, req, res, opportunityController, opportunityService;

    beforeEach(() => {
      req = {
        query: {
          type: stubValue.opportunityType,
          female: stubValue.onlyForFemale,
        },
      };
      status = sinon.stub();
      json = sinon.spy();
      res = {
        json,
        status,
      };
      status.returns(res);
      const opportunityManager = sinon.spy();
      opportunityService = new OpportunityService(opportunityManager);
    });

    it('should retrieve Opportunities with specific opportunityType', async function () {
      const stub = sinon
        .stub(opportunityService, 'getOpportunities')
        .returns(stubValue);
      opportunityController = new OpportunityController(opportunityService);
      await opportunityController.getOpportunities(req, res);
      expect(stub.calledOnce).to.be.true;
      expect(status.calledOnce).to.be.true;
      expect(status.firstCall.args[0]).to.equal(200);
      expect(json.calledOnce).to.be.true;
      expect(json.firstCall.args[0].data).to.equal(stubValue);
    });
  });
});
