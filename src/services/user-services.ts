import { NotFoundException } from "../common/exceptions/not-found.exception";
import { TypeChecker } from "../common/type-checker";
import { User } from "../models/user";
import * as userRepository from "../repositories/user.repository";

const findUser = async (userId: number): Promise<User> => {
  const user = await userRepository.findUserById(userId);

  if (TypeChecker.isNull(user)) {
    throw new NotFoundException("사용자를 찾을 수 없습니다.");
  }

  return user;
};

export { findUser };
