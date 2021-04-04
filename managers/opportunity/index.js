import  Opportunity from '../../models/opportunity.js';
class opportunityManager {
  constructor() {
    this.opportunity = Opportunity;
  }
  async createOpportunity(
    opportunityId,
    opportunityTitle,
    opportunityType,
    opportunityOrganisation,
    opportunityLocation,
    opportunityDescription,
    opportunityEligibility,
    opportunityRegistrationDeadline,
    opportunityDate,
    opportunityURL
  ) {
    console.log('Inside Manager', opportunityId);
    let opportunity = {
      opportunityId: opportunityId,
      opportunityTitle: opportunityTitle,
      opportunityType: opportunityType,
      opportunityOrganisation: opportunityOrganisation,
      opportunityLocation: opportunityLocation,
      opportunityDescription: opportunityDescription,
      opportunityEligibility: opportunityEligibility,
      opportunityRegistrationDeadline: opportunityRegistrationDeadline,
      opportunityDate: opportunityDate,
      opportunityURL: opportunityURL,
    };
    console.log('Values received in manager', opportunity);

    try {
      let newOpportunity = await this.opportunity.create(opportunity);
      return newOpportunity;
    } catch (err) {
      console.log('ERROR IN postNewOpportunity OpportunityMANAGER');
      throw err;
    }
  }

  
  // Here I have implemeted 2 paramters , QueryLimit and offset to return the relevant data in the given range 
  // QueryLimit is used as variable so to avoid confusiong with native limit() function 
  // The range starts from offset and returns all the data that is under the limit , eg 
  // if you query for offset 0 and Querylimit 5 then you will get the data back as [0...4]both 0 and 4 inclusive 

    
  // add   ?queryLimit=x&offset=y at the end of ooportunity route where x and y are variables 

  // eg    http://localhost:3030/opportunity?offset=2&queryLimit=3  for  refrence 

async getOpportunities(queryObject) {
    try {
      // Filter based on opportunityType
      if (queryObject.type) {
        queryObject['opportunityType'] = queryObject.type;
        delete queryObject.type;
      }
      console.log('Values in QueryString', queryObject);

      const default_page_limit= 20 ;
      const default_page_offset= 0 ;

       let { offset, queryLimit} = queryObject ;


       // Conditionals are used to handle the cases if user enters negative data in offset or ueryLimit , in that
       // the output will be the default data (offset=0 and queryLimit=20) 

       // else it will work as specified above 

       // This code doesn't handle the case if User enters offset more than the max_data available 


       

      if(queryLimit==undefined || queryLimit<0 || offset< 0)
      {
        queryLimit= default_page_limit ;
      }

      if(offset==undefined || offset<0 || queryLimit<0)
      {
        offset= default_page_offset ;
      }

      console.log(offset, queryLimit) ;    // to check the values of offset and Querylimit under different cases 


     // Here the query Parameters are combined accordingly to ender the desired data 

     return this.opportunity.find({"opportunityId":{$gte: offset}}).limit(parseInt(queryLimit));
    } catch (err) {
      console.log('ERROR IN getOpportunities OpportunityMANAGER');
      throw err;
    }
  }
  



}

export default opportunityManager;
