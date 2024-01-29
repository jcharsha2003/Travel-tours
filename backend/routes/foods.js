import express from "express";
import {  getAllFood, getFoodCount
 } from "../controllers/foodController.js";


const router = express.Router()


//get all Food
router.get("/" ,getAllFood )

router.get("/search/getFoodCount" ,getFoodCount)

export default router;