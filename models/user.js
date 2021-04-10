import mongoose from 'mongoose';

// Schema For the User looking / Posting Opprtunities
let userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 100,
  },

  password: {
    type: String,
    required: function(){
      return this.authProvider == "LOCAL";
    },
    minLength: 8,
    maxLength: 20,
  },

  authProviderId : {
    type: String,
    required: function(){
      return this.authProvider !== "LOCAL";
    },
  },

  authProvider: {
    type : String,
    required : true
  },

  email: {
    type: String,
    required: true,
    default: 'NA',
  },

  emailVerified : {
    type : Boolean,
    required : true,
    default : false
  },

  image : {
    type : String
    //To add default placeholder
  },

  gender: {
    type: String,
    required: true,
    default: 'Others',
  },

  dob: {
    type: Date
  },
  // to confirm wether the person is in college or already working

  isStudying: Boolean,

  // Personal/Description similar to linkedin Summary

  briefDescription: {
    type: String,

    maxLength: 100,
  },

  collegeName: {
    type: String,
    required: true,
    default: 'NA',
  },

  // Get both state and city of the user's College/university
  collegeState: {
    type: String,
    required: true,
    default: ' NA',
  },
  collegeCity: {
    type: String,
    required: true,
    default: ' NA',
  },

  yearOfGraduation: {
    type: Date
  },

  //  Array of strings for the user to enter his Skills
  skills: [String],

  //  URLs of social media handles of the user (Github, linkedin, others)

  // These links must be validated using mongoose validator as it doesn't support URL as type(needs to be implemented )
  github: {
    type: String,
  },

  linkedin: {
    type: String,
  },

  //Past internship/Job experinces of the User

  workExperience: [
    {
      date: { type: Date, default: Date.now() },
      companyName: { type: String, default: '' },
      workDescription: { type: String, default: '' },
    },
  ],

  // To search for an opportunity
  lookingForJob: Boolean,

  // To post an opprtunity
});

// This is for the Admins who will act as a mediator

let adminSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 100,
  },

  password: {
    type: String,
    required: function(){
      return this.authProvider == "LOCAL";
    },
    minLength: 8,
    maxLength: 20,
  },

  authProviderId : {
    type: String,
    required: function(){
      return this.authProvider !== "LOCAL";
    },
  },

  authProvider: {
    type : String,
    required : true
  },

  email: {
    type: String,
    required: true,
    default: 'NA',
  },

  emailVerified : {
    type : Boolean,
    required : true,
    default : false
  },

  image : {
    type : String
    //To add default placeholder
  },

  gender: {
    type: String,
    required: true,
    default: 'Others',
  },

  dob: {
    type: Date
  },
  // to confirm wether the person is in college or already working

  isStudying: Boolean,

  // Personal/Description similar to linkedin Summary

  briefDescription: {
    type: String,
    maxLength: 100,
  },

  // Post of the person being the Admin so that we can give powers as per reputation/JobTitle

  jobTitle: {
    type: String,
    required: true,
  },
});

const user = mongoose.model('users', userSchema);
const admin = mongoose.model('admins', adminSchema);

export const User = user;
export const Admin = admin;
