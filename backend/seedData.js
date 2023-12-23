const mongoose=require('mongoose');
const EmissionFactor=require('./models/EmissionFactor');


const emissionFactor = [
    {
      entityName: "electricity",
      emissionFactor: 0.53,
      unit: "kWh",
    },
    {
      entityName: "naturalgas",
      emissionFactor: 0.00275,
      unit: "kg",
    },
    {
      entityName: "propane",
      emissionFactor: 0.00575,
      unit: "kg",
    },
    {
      entityName: "heatingoil",
      emissionFactor: 0.00319,
      unit: "kg",
    },
    {
      entityName: "coal",
      emissionFactor: 1946.83,
      unit: "metric tons",
    },
    {
      entityName: "lpg",
      emissionFactor: 0.002983,
      unit: "kg",
    },
    {
      entityName: "diesel",
      emissionFactor: 0.0027,
      unit: "kg",
    },
    {
      entityName: "chlorofluorocarbon",
      emissionFactor: 18900,
      unit: "kg",
    },
    {
      entityName: "hydrofluorocarbon",
      emissionFactor: 1430,
      unit: "kg",
    },
    {
      entityName: "difluoromethane",
      emissionFactor: 675,
      unit: "kg",
    },
    {
      entityName: "HFC Blend",
      emissionFactor: 675,
      unit: "kg",
    },
    {
      entityName: "isobutane",
      emissionFactor: 21,
      unit: "kg",
    },
    {
      entityName: "propane refrigerant",
      emissionFactor: 11,
      unit: "kg",
    },
    {
      entityName: "petrol",
      emissionFactor: 8.78,
      unit: "gallon",
    },
];
async function seedEmissionFactors(){
    await EmissionFactor.deleteMany({});
    await EmissionFactor.insertMany(emissionFactor);
    console.log("emission factors added")
}

module.exports=seedEmissionFactors;
