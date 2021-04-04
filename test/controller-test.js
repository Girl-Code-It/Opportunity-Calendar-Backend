// Under process 


// import chai from 'chai'
// import sinon from 'sinon'
// const OpportunityManager = require("../managers/opportunity/index");
// const expect = chai.expect;
// var stubValue=require("./fakedata")
// const OpportunityService = require("../services/opportunity/index");
// const OpportunityController=require("../controllers/opportunity/index")

// describe("OpportunityController", function() {
//     describe("Create Opportunity", function() {
//       let status ,json, res, opportunityController, opportunityService;
//       beforeEach(() => {
//         status = sinon.stub();
//         json = sinon.spy();
//         res = { json, status };
//         status.returns(res);
//         const opportunityManager = sinon.spy();
//         opportunityService = new OpportunityService(opportunityManager);
//       });
    
//       it("should add a new Opportunity to the Opportunity database", async function() {
//         const req = {
//           body: {  stubValue   }
//         };

//         const stub = sinon.stub(opportunityService, "createOpportunity").returns(stubValue);
//         opportunityController = new OpportunityController(opportunityService);
//         await opportunityController.createOpportunity(req, res);
//         expect(stub.calledOnce).to.be.true;
//         expect(status.calledOnce).to.be.true;
//         console.log(status)
//         expect(json.calledOnce).to.be.true;
//         console.log(json)
//         // expect(json.data).to.equal(stubValue);
//       });
//     });
//   });