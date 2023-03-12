import { User } from "../models/user";

const findUserById = async (userId: number): Promise<User> => {
  return await User.findByPk(userId);
};

const findUserByEmail = async (email: string): Promise<User> => {
  return await User.findOne({ where: { email } });
};

export { findUserById, findUserByEmail };
