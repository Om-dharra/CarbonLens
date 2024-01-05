const OpenAI = require("openai");
const express=require("express")
const router=express.Router();
const BusinessDatabase=require('../models/BusinessDatabase');
const {isLoggedIn}=require("../middleware");

const FootPrintDb=require("../models/FootprintDb");
const VehicleDb=require("../models/VehicleDb");

const openai = new OpenAI({
  apiKey:"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"
});
let domain_of_company;
let electricity;
let petrol;
let diesel;
let carbonEmission;
let standard;


async function main(input) {
    const completion = await openai.chat.completions.create({
      messages: [{"role": "system", "content": "You are a helpful assistant."},
          {"role": "user", "content": input},
          {"role" : "assistant", "content": "give me result in json format"}
      ],
      model: "gpt-3.5-turbo",
    });
    let content = completion.choices[0].message.content;
    return content;
  }

router.get('/answer/:businessid', isLoggedIn, async function (req, res) {
  const { businessid } = req.params;
  const Business = await BusinessDatabase.findById(businessid);
  console.log(Business);
  domain_of_company = Business.Industry;
  const id1 = Business.Carbondatabase_B;
  const id2 = Business.Carbondatabase_V;
  const FootprintDatabase = await FootPrintDb.findById(id1);
  const VehicleDatabase = await VehicleDb.findById(id2);
  electricity = FootprintDatabase.electricity;
  petrol = VehicleDatabase.petrol;
  carbonEmission = parseInt((Business.Result)) / 1000; //in tonnes
  standard = parseInt(Business.Average / 1000); //in tonnes
  let input2 = `Act like an API. I give you a request in json format and you give me output in json format. You have to only answer in json format and nothing else! I am giving you a carbon footprint of a company which operates in field of ${domain_of_company} and you have to generate analysis and based on that you will provide actionable recommendations.
Your output json format: {"analysis": "...", "performance" : "...", "recommendations": [..]}
talk as if you are a environment specialist giving advice to a major corporation and analyze the performance of the company
do not repeat the input values provided to you,give me at least 5 and at most 10 points which suggest how to reduce carbon footprint of this company
give me sector -specific recommendations and answer as if you are talking to the owner of the company in first person

each item in recommendations array must be without any serial number and should be around 3-4 lines
Input json: {
"electricity_kwh": ${electricity},
"petrol_litre": ${petrol},
"diesel_litre": ${diesel},
"carbon_emission_per_product" : ${carbonEmission} ,
"global_average_per_product" : ${standard}
}`

  let response = JSON.parse(await main(input2));
  res.render('AiChatbot/recommendations', { text: response.recommendations, analysis: response.analysis, performance: response.performance })
})

module.exports=router;
