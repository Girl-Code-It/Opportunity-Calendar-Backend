import { expect } from 'chai';
import mongoose from 'mongoose';
import sinon from 'sinon';
import stubValue from '../fakedata.js';
import Opportunity from '../../models/opportunity.js';
import { db_user, db_pwd, db_host, db_name } from '../../config.js';
import OpportunityManager from '../../managers/opportunity/index.js';

function connectDB() {
  const mongoSrvString = `mongodb+srv://${db_user}:${db_pwd}@${db_host}/${db_name}?retryWrites=true&w=majority`;

  // connect the database
  return mongoose.connect(mongoSrvString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });
}

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
      this.timeout(20 * 1000); // 20s for newtwork req. should be enough for ideal cases

      let dbConn = await connectDB();

      const stub = sinon.stub(Opportunity, 'find').returns(stubValue);
      const opportunityManager = new OpportunityManager();
      const opportunity = (
        await opportunityManager.getOpportunities({
          type: stubValue.opportunityType,
        })
      ).results;

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

      await dbConn.connection.close();
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
    });
  });
});
