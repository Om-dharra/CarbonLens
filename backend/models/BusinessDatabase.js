const mongoose=require('mongoose');

const carbonSchema=new mongoose.Schema({
    Bname:String, //Name of Bussiness
    Industry:String,
    NoOfEmployees:Number,
    WFHpercent:Number
    

})