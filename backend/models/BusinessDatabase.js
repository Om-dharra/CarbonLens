const mongoose=require('mongoose');

const carbonSchema=new mongoose.Schema({
    Bname:String, //Name of Bussiness
    Industry:String,
    NoOfEmployees:Number,
    WFHpercent:Number,
    Result:String
    

})

const BusinessDatabase=mongoose.model('BusinessDatabase',carbonSchema);


module.exports=BusinessDatabase