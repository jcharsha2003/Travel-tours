//getAll Food

import Food from "../models/Food.js";

export const getAllFood = async (req, res) => {
    //for pagination
    const page = parseInt(req.query.page);

    try {
      const foods = await Food.find({})
        .skip(page * 8)
        .limit(8);
   
      res
        .status(200)
        .json({
          success: true,
          count: foods.length,
          message: "Successful",
          data: foods,
        });
    } catch (err) {
      res.status(404).json({
        success: false,
        message: "not found",
      });
    }
  };

  //get tour counts
export const getFoodCount = async (req, res) => {
    try {
      const foodCount = await Food.estimatedDocumentCount();
  
      res.status(200).json({ success: true, data: foodCount });
    } catch (err) {
      res.status(500).json({ success: false, message: "failed to fetch" });
    }
  };