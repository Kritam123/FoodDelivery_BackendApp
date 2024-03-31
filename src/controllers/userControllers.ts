import { Request, Response } from "express";
import userModel from "../models/userModel";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.body;
    const existingUser = await userModel.findOne({ auth0Id });
    if (existingUser) {
      return res.status(200).json({ message: "User already exists!" });
    }

    const newUser = await userModel.create(req.body);
    await newUser.save();
    return res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    return res.status(500).json({ message: error, success: false });
  }
};

// get current logged in user

export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const currentUser = await userModel.findById({ _id: req.userId });
    console.log(currentUser)
    if (!currentUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(currentUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
// update currentUSer

export const updateCurrentUser = async (req: Request, res: Response) => {
  try {
    const { name, addressLine1, country, city } = req.body;
    const user = await userModel.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.username = name;
    user.addressLine1 = addressLine1;
    user.city = city;
    user.country = country;

    await user.save();

    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating user" });
  }
};