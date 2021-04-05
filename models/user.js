import mongoose from 'mongoose';

// Schema For the User looking / Posting Opprtunities
let userSchema = new mongoose.Schema({
  userSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true,
        defaul : ''
    },
    email : {
        type : String,
        required : true,
        unique: true
    },
    image : {
        type : String
    },
    password: {
      type: String,
      required: true,
      default: 'NA',
      minLength: 8,
      maxLength: 100,
    },
    gender: {
      type: String,
      required: true,
      default: 'Not Specifed',
    },
    dateofBirth: {
      type: Date,
      default: new Date().getDate,
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
      type: Date,
      default: new Date().getFullYear(),
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
    isAdmin : {
      type : Boolean,
      required : true,
      default : false
    }
  // To post an opprtunity
});

module.exports = mongoose.model('users', userSchema);
