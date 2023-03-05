import dayjs from "dayjs";
import { NotFoundException } from "src/common/exceptions/not-found.exception";
import { TypeChecker } from "src/common/type-checker";
import { UserStamp } from "src/models/user-stamp";
import { UserStampRepository } from "src/repositories/user-stamp.repository";

export class UserStampService {
  constructor(private readonly userStampRepository: UserStampRepository) {}

  public findAllUserStamp = async (userId: number): Promise<UserStamp[]> => {
    const userStamps = await this.userStampRepository.findAllUserStamp(userId);
    console.log(userStamps);

    if (TypeChecker.isEmptyArray(userStamps)) {
      throw new NotFoundException("등록된 스탬프가 없습니다.");
    }

    const result = userStamps.sort((a, b) =>
      a.stampName.toLowerCase() < b.stampName.toLowerCase() ? -1 : 1
    );

    return result;
  };

  public countUserStamp = (userStampList: UserStamp[]): number => {
    const certifiedUserStamps = userStampList.filter((stamp) => {
      return stamp.isStamp === true;
    });

    return certifiedUserStamps.length;
  };

  public findUserStamp = async (userStampId: number): Promise<UserStamp> => {
    const userStamp = await this.userStampRepository.findUserStamp(userStampId);
    console.log(userStamp);

    if (TypeChecker.isNull(userStamp)) {
      throw new NotFoundException("등록된 스탬프가 없습니다.");
    }

    return userStamp;
  };

  public certifyStamp = async (params: {
    userStampId: number;
    userStampImage: string;
    stampComment: string;
    weatherTemp: string;
    weatherIcon: string;
  }): Promise<UserStamp> => {
    const userStamp = await this.userStampRepository.findUserStampById(
      params.userStampId
    );

    if (TypeChecker.isNull(userStamp)) {
      throw new NotFoundException("등록된 스탬프가 없습니다.");
    }

    return this.updateUserStamp(userStamp, params);
  };

  //TODO updatedAt check
  private updateUserStamp = (
    userStamp: UserStamp,
    params: {
      userStampId: number;
      userStampImage: string;
      stampComment: string;
      weatherTemp: string;
      weatherIcon: string;
    }
  ): UserStamp => {
    const now = dayjs().toDate();

    userStamp.registrationAt = now;
    userStamp.isStamp = true;
    userStamp.userStampImage = params.userStampImage;
    userStamp.stampComment = params.stampComment;
    userStamp.weatherTemp = params.weatherTemp;
    userStamp.weatherIcon = params.weatherIcon;

    userStamp.save();

    return userStamp;
  };
}
