import { NotFoundException } from "src/common/exceptions/not-found.exception";
import { TypeChecker } from "src/common/type-checker";
import { User } from "src/models/user";
import { UserRepository } from "src/repositories/user.repository";

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public findUser = async (userId: number): Promise<User> => {
    const user = await this.userRepository.findUserById(userId);

    if (TypeChecker.isNull(user)) {
      throw new NotFoundException("사용자를 찾을 수 없습니다.");
    }

    return user;
  };
}
