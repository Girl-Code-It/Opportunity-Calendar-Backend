
All changes to models shall be documented here

### Opportunity

| Field                           | Datatype | Default | Required | Comments                                                                                               |     |

| ------------------------------- | -------- | ------- | -------- | ------------------------------------------------------------------------------------------------------ | --- |                               |     |

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
=======
_All changes to models shall be documented here_

### Opportunity Schema

- **oportunityTitle**

  - Datatype: String
  - Required: true
  - minLength: 5
  - maxLength: 100

- **opportunityType**

  - Datatype: String
  - Required: true
  - Default: OTHERS
  - Enum: Only 6 values allowed

- **opportunityOrganisation**

  - Datatype: String
  - Comment: company in case of Job/Interns, organising Commitee in case of Scholarship/CodingCompettion/Conference

- **opportunityLocation**

  - Datatype: String
  - Default: NA
  - minLength: 5
  - maxLength: 100

- **opportunityDescription**

  - Datatype: String
  - Default: NA

- **opportunityEligibility**

  - Datatype: String
  - Default: NA

- **opportunityRegistrationDeadline**

  - Datatype: Date
  - Default: Date.now()
  - Comment: all types of opportunities will not have this field, for time being this is a temporary solution

- **opportunityDate**

  - Datatype: Date
  - Default: Date.now()
  - minLength: 5
  - maxLength: 50

- **opportunityURL**

  - Datatype: String
  - Required: true
  - minLength: 10
  - maxLength: 500

- **onlyForFemale**
  - Datatype: Boolean
  - Required: true
  - Default: false

### User Schema

- **fullName**

  - Datatype: String
  - Required: true
  - Default: NA
  - minLength: 5
  - maxLength: 100

- **password**

  - Datatype: String
  - Required: true
  - Default: NA
  - minLength: 8
  - maxLength: 100

- **emailAddress**

  - Datatype: String
  - Required: true
  - Default: NA

- **gender**

  - Datatype: String
  - Required: true
  - Default: Others

- **dateofBirth**

  - Datatype: Date
  - Default: Date.now().getDate
  - isStudying: Boolean
  - Comment: to confirm wether the person is in college or already working

- **briefDescription**

  - Datatype: String
  - maxLength: 100

- **collegeName**

  - Datatype: String
  - Required: true
  - Default: NA

- **collegeState**

  - Datatype: String
  - Required: true
  - Default: NA

- **collegeCity**

  - Datatype: String
  - Required: true
  - Default: NA

- **yearOfGraduation**

  - Datatype: Date
  - Default: new Date().getFullYear()

- **Skills**

  - Datatype: Array of String
  - Comment: Array of strings for the user to enter his Skills

- **Github**

  - Datatype: String
  - Comment: Link must be validated using mongoose validator as it doesn't support URL as type

- **Linkedin**

  - Datatype: String
  - Comment: Link must be validated using mongoose validator as it doesn't support URL as type

- **workExperience**
- Datatype: Array of objects
- Date
  - Datatype: Date
  - Default: Date.now()
- companyName
  - Datatype: String
  - Default: NA
- workDescription
  - Datatype: String
  - Default: NA

### Admin Schema

- **fullName**

  - Datatype: String
  - Required: true
  - Default: NA
  - minLength: 5
  - maxLength: 100

- **password**

  - Datatype: String
  - Required: true
  - Default: NA
  - minLength: 8
  - maxLength: 100

- **emailAddress**

  - Datatype: String
  - Required: true
  - Default: NA

- **gender**

  - Datatype: String
  - Required: true
  - Default: Others

- **dateofBirth**

  - Datatype: Date
  - Default: Date.now().getDate
  - isStudying: Boolean
  - Comment: to confirm wether the person is in college or already working

- **briefDescription**

  - Datatype: String
  - maxLength: 100

- **jobTitle**
  - Datatype: String
  - Required: true
