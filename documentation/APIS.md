### Opportunity

#### DONE

1. **Create Opportunity**

- METHOD - POST
- EndPoint - http://localhost:3030/opportunity
- Parameters Required -
  - opportunityTitle,
  - opportunityType,
  - opportunityOrganisation,
  - opportunityLocation,
  - opportunityDescription,
  - opportunityEligibility,
  - opportunityRegistrationDeadline,
  - opportunityDate,
  - opportunityURL,
- Response -
  - NewOpportunity
  - Error
- Status Code -
  - 201 - If opportunity successfully created
  - 400 - If opportunity could not be created

2. **Get Opportunities**

- METHOD - GET
- EndPoint - http://localhost:3030/opportunity?type=JOB
- Functionality -
  - Return opportunities matching the query param
  - If no params are given, return all opportunities
- Query Param = opportunityType
- Optional Query Parameters Possible For 'type' -
  - 'HACKATHON'
  - 'JOB'
  - 'INTERNSHIP'
  - 'SCHOLARSHIP'
  - 'CONFERENCE'
  - 'CODINGCOMPETITION'
- Response -
  - fetchedOpportunities
  - Error
- Status Code -
  - 200 - If opportunity successfully fetched
  - 400 - If opportunity could not be fetched

3. **Delete Opportunity**

- METHOD - DELETE
- EndPoint - http://localhost:3030/opportunity/:id
- Functionality -
  - Deleted the opportunity from the database having id as passed in params
  - Returns the deleted opportunity
- Route Param = \_id
- Response -
  - deletedOpportunity
  - Error
- Status Code -
  - 200 - If opportunity successfully deleted

4. **Update Opportunity**

- Method - PATCH

- EndPoint - http://localhost:3030/opportunity/:opId
- Functionality -
  - Updates the existing Opportunity
- parameter - opportunity_id
- Parameters Required -
  (Any of the following field which users wants to update)
  - opportunityTitle,
  - opportunityType,
  - opportunityOrganisation,
  - opportunityLocation,
  - opportunityDescription,
  - opportunityEligibility,
  - opportunityRegistrationDeadline,
  - opportunityDate,
  - opportunityURL,
- Status Code -
  - 201 - If opportunity successfully created
  - 400 - If opportunity could not be created

### TODO

2. **Get Opportunities**
   - Later - Implement Pagination
3. **BookMark/Save Opportunity**
   - The user APIs need to be implemented before implementing this
4. **Share Opportunity**
   - The user will have the option to share the opportunity over whatsapp, linkedin, Twitter

### User

1. SignUp
2. Login
   Note: SignUp and Login with Google Oauth are preferred, Suggestions are welcome.
