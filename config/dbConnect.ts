import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MongoDB_Url!, {
      appName: "FoodDelivery",
      family: 4,
    });
    console.log("DB Connect Successully!");
  } catch (error) {
    console.log(error)
  }
};
