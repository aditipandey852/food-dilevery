import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://aditipandey2004ind:aditi@41@cluster0.mie6kp4.mongodb.net/food-del').then(() => console.log("DB Connected"));
};
