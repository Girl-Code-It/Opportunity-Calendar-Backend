import faker from 'faker'
module.exports = {
    opportunityId: faker.datatype.uuid(),
    opportunityTitle: faker.company.companySuffix(),
    opportunityType: faker.random.arrayElement(['OTHERS',
    'HACKATHON',
    'JOB',
    'INTERNSHIP',
    'SCHOLARSHIP',
    'CONFERENCE',
    'CODINGCOMPETITION',]),
    opportunityOrganisation:faker.company.companyName(),
    opportunityLocation: faker.address.city(),
    opportunityDescription: faker.lorem.paragraph(),
    opportunityEligibility: faker.lorem.paragraphs(2),
    opportunityRegistrationDeadline:faker.date.past() ,
    opportunityDate: faker.date.past(),
    opportunityURL: faker.internet.url(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.past()
  };
