let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
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
    gender : {
        type: String,
        enum : [
            'MALE',
            'FEMALE'
        ]
    },
    // Details about where logged in from
    auth_provider : {
        type : String,
        required : true
    },
    auth_provider_id: {
        type : String,
    }
},
{
    timestamps : true
});

module.exports = mongoose.model('user', userSchema);
