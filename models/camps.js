var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Camp = new Schema({
    campname:{
        type : String,
        required : true
    },
    camptype:{
        type : String,
        required : true
    },
    contact: {
      type: String,
      required : true
    },
    location: {
        type : String,
        required : true
    },
    address: {
        type : String,
        required : true 
    },
    email:   {
        type: String,
        required : true
    },
    latitude: {
        type: String,
        required : true
    },
    longitude: {
        type: String,
        required : true
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Camp', Camp);