import { createUserService } from "../services/signup.service.js";

export const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = await createUserService(userData);
    res.status(201).json({ user: user, message: "User created successfully." });
  } catch (error) {
    console.error();
    res.status(500).json({ message: error.message });
  }
};
