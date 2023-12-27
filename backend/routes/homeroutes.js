const express=require("express")
const router=express.Router();
const BusinessDb=require('../models/BusinessDatabase');
const {isLoggedIn}=require("../middleware");
const User=require("../models/User");

router.get("/home",isLoggedIn,(req,res)=>{
    res.render("homePage/index");
})
router.get("/calulateCF",isLoggedIn,(req,res)=>{
    res.render("homePage/calculateCF");
})
router.get("/FillForm",isLoggedIn,(req,res)=>{
    res.render("homePage/buisenessForm");
})

router.post("/BusinessDb",isLoggedIn,async(req,res)=>{
    const {BName,Industry,emp,wfh}=req.body;
    await BusinessDb.create({BName,Industry,emp,wfh});
    req.flash("Your Business Details are added Successfully");
    res.redirect("/BuildingDb");    
})
router.get("/Result",isLoggedIn,async(req,res)=>{
    const user=await BusinessDb.find({});
    const value=user.Result;
    
    console.log(value);
    res.render("homePage/Result",{value});
})
router.get("/BuildingDb",isLoggedIn,(req,res)=>{
    res.render("homePage/buildingDataInput");
})
router.get("/VehicleDb",isLoggedIn,(req,res)=>{
    res.render("homePage/vehicleDataInput");
})


module.exports=router