const mongoose=require('mongoose');

const carbonSchema=new mongoose.Schema({
    Bname:String, //Name of Bussiness
    Industry:String,
    NoOfEmployees:Number,
    WFHpercent:Number,
    Result:String,
    Carbondatabase_B:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"FootprintDb"
        }
    ],
    Carbondatabase_V:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"VehicleDb"
        }
    ]
})

const BusinessDatabase=mongoose.model('BusinessDatabase',carbonSchema);


module.exports=BusinessDatabase