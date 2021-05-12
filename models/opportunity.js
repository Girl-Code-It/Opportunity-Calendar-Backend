import mongoose from 'mongoose';
//SCHEMA SETUP
let opportunitySchema = new mongoose.Schema({
  opportunityTitle: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 100,
  },
  opportunityType: {
    type: String,
    required: true,
    enum: [
      'OTHERS',
      'HACKATHON',
      'JOB',
      'INTERNSHIP',
      'SCHOLARSHIP',
      'CONFERENCE',
      'CODINGCOMPETITION',
    ],
    default: 'OTHERS',
  },
  opportunityOrganisation: {
    //company in case of Job/Interns, organising Commitee in case of Scholarship/CodingCompettion/Conference
    type: String,
  },
  opportunityLocation: {
    type: String,
    minLength: 2,
    maxLength: 100,
    default: 'NA',
  },
  opportunityDescription: {
    type: String,
    default: 'NA',
  },
  opportunityEligibility: {
    type: String,
    default: 'NA',
  },
  opportunityRegistrationDeadline: {
    type: Date,
    default: Date.now(), //all types of opportunities will not have this field, for time being this is a temporary solution
  },
  opportunityDate: {
    type: Date,
    minLength: 5,
    maxLength: 50,
    default: Date.now(),
  },
  opportunityURL: {
    type: String,
    minLength: 10,
    maxLength: 500,
    required: true,
  },

  onlyForFemale: {
    type: Boolean,
    required: true,
    default: false,
  },
  organisationLogoURL: {
    type: String,
    required: false,
    default: 'https://picsum.photos/200',
  },
});

export default mongoose.model('opportunity', opportunitySchema);
