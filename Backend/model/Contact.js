const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    f_name:{
        type:String,
        required:true,
        min:3,
        max:255,
    },
    l_name:{
        type:String,
        required:true,
        min:3,
        max:255,
    },
    phone: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  RelationshipStatus: {
    type: String,    
  },
  Email:{
    type:String,
  },
  LocationLongitude:{
    type:Number,
  },
  LocationLatitude:{
    type:Number,
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

});
module.exports = mongoose.model('Contact', contactSchema);