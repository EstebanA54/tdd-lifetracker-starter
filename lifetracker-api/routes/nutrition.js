const express = require("express")
const Nutrition = require("../models/nutrition")
const router = express.Router()
const security = require("../middleware/security")
const {createUserJwt} = require("../utils/tokens")
const permissions = require("../middleware/permissions")

router.post("/",security.requireAuthenticatedUser, async (req,res,next) => {
    try{
        
        const { user } = res.locals
        console.log(777, user)
        const nutrition = await Nutrition.createNutrition({user, nutrition: req.body})
        return res.status(201).json({ nutrition })
    } catch(err){
        next(err)
    }
})

router.get("/", security.requireAuthenticatedUser,async (req,res,next) => {
    try{
        const {user} = res.locals  
        const nutritions = await Nutrition.listNutrition({user})
        return res.status(200).json({ nutritions })
    } catch(err){
        next(err)
    }
})

router.get("/id/:nutritionId",async (req,res,next) => {
    try{
        
        const { nutritionId } = req.params
        const nutrition = await Nutrition.fetchNutritionById(nutritionId)
        return res.status(200).json({nutrition})
    } catch(err){
        next(err)
    }
})



module.exports = router;