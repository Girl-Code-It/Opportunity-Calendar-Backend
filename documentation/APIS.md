### Opportunity 
#### DONE
1. **Create Opportunity** 
* METHOD - POST
* EndPoint - http://localhost:3030/opportunity
* Parameters Required -  
     * opportunityId,
     * opportunityTitle,
     * opportunityType,
     * opportunityOrganisation,
     * opportunityLocation, 
     * opportunityDescription,
     * opportunityEligibility, 
     * opportunityRegistrationDeadline,
     * opportunityDate,
     * opportunityURL,
* Response - 
    * NewOpportunity 
    * Error 
* Status Code -
    *  201 - If opportunity successfully created 
    *  400 - If opportunity could not be created

### TODO 
2. **Get Opportunities**   
    * Query Param = opportunityType
    * Return opportunities matching the query param 
    * If no params are given, return all opportunities 
    * Later - Implement Pagination
3.  **BookMark/Save Opportunity** 
    * The user APIs need to be implemented before implementing this
4.  **Share Opportunity**
    * The user will have the option to share the opportunity over whatsapp, linkedin, Twitter


### User 
1. SignUp
2. Login 
Note: SignUp and Login with Google Oauth are preferred, Suggestions are welcome.