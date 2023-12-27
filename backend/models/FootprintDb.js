const mongoose=require('mongoose')

const footprintSchema=new mongoose.Schema({
    // Type:String,
    Electricity_B:Number, //B->Building
    naturalgas_B: Number,
    heating_oil_B: Number,
    coal_B: Number,
    LPG_B: Number,
    propane_B: Number,
    diesel_B: Number,
    refrigerant_B: Number,
    //Vehicle
    Electric_v:Number,
    petrol_v:Number,
    diesel_v: Number,
    LPG_v: Number,
    CNG_v: Number,
})

const FootPrintDetail=mongoose.model('FootPrintDetail',footprintSchema);


module.exports=FootPrintDetail