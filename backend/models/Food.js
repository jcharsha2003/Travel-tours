import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
 
    link: {
      type: String,
      required: true,
    },
    price: {
        type: Number,
        required: true,
      },
    
    photo: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    }

 
  },
  { timestamps: true }
);

export default mongoose.model("Food", foodSchema);