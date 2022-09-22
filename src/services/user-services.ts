import { UserParams } from "../common/type";
import UserRepository from "../models/user-model";

const getUserById = async (userId: string): Promise<UserParams | null> => {
  return await UserRepository.findOne({ _id: userId });
};

const getUserByEmail = async (email: string): Promise<UserParams | null> => {
  return await UserRepository.findOne({ email });
};

const creatUser = async (params: {
  email: string;
  nickname: string;
  profileImg?: string;
}): Promise<UserParams> => {
  return await UserRepository.create({
    email: params.email,
    nickname: params.nickname,
    profileImg: params.profileImg,
  });
};

export { getUserById, getUserByEmail, creatUser };
