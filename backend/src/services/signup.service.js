import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const createUserService = async (userData) => {
  const { firstName, lastName, email, password } = userData;

  const hashedPassword = await bcrypt.hash(password, 10);
  const createdUser = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  const savedUser = await createdUser.save();

  return savedUser;
};
