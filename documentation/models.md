All changes to models shall be documented here

### Opportunity

| Field                           | Datatype | Default | Required | Comments                                                                                               |     |
| ------------------------------- | -------- | ------- | -------- | ------------------------------------------------------------------------------------------------------ | --- |
| opportunityId                   | String   | -       | False    | for jobs, internships it will exist for others it will not                                             |     |
| opportunityType                 | String   | -       | True     | enum - only 6 values allowed                                                                           |     |
| opportunityTitle                | String   | -       | True     |                                                                                                        |     |
| opportunityOrganisation         | String   | -       | True     | company in case of Job/Interns, organising Commitee in case of Scholarship/CodingCompettion/Conference |     |
| opportunityLocation             | String   | -       | False    |                                                                                                        |     |
| opportunityDescription          | String   | -       | True     |                                                                                                        |     |
| opportunityEligibility          | String   | -       | False    |                                                                                                        |     |
| opportunityURL                  | String   | -       | True     |                                                                                                        |     |
| opportunityRegistrationDeadline | Date     | -       | False    |                                                                                                        |     |
| opportunityDate                 | Date     | -       | False    | For Hackathon, Conferences this serves as date of event                                                |     |

### User
