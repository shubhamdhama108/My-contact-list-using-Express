const mongoose = require('mongoose');

// create schema
const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true 
    }
});

// create collection or model with name capital
const Contact = mongoose.model('Contact', contactSchema); //with what name should be of model in db, and db name.

module.exports=Contact;