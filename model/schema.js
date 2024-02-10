const { default: mongoose } = require('mongoose');

require('./connection');


// Schema 
const urlSchema =  mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectUrl:{
        type:String,
        required:true,
    },
    visitedHistory:[{
        timestamp:{
            type:Number,
        }
    }]
},{timestamp:true})


const url=mongoose.model("Shorturl",urlSchema);

module.exports=url