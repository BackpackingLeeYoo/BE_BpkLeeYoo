import SQ from "sequelize";
import { Stamp } from "../models/stamp";
import { UserStamp } from "../models/user-stamp";
import { User } from "../models/user";

const Sequelize = SQ.Sequelize;

const findAllUserStamp = async (userId: number): Promise<UserStamp[]> => {
  const userStamps = await UserStamp.findAll({
    attributes: [
      "id",
      "stampName",
      "isStamp",
      "userStampImage",
      "registrationAt",
      [Sequelize.col("stamp.latitude"), "latitude"],
      [Sequelize.col("stamp.longitude"), "longitude"],
    ],
    include: {
      model: Stamp,
      attributes: [],
    },
    where: { userId },
  });

  return userStamps;
};

const findUserStamp = async (userStampId: number): Promise<UserStamp> => {
  const userStamp = await UserStamp.findOne({
    attributes: [
      "id",
      "stampName",
      "userStampImage",
      "stampComment",
      "weatherTemp",
      "weatherIcon",
      "registrationAt",
      [Sequelize.col("user.nickname"), "nickname"],
      [Sequelize.col("user.profileImg"), "profileImg"],
    ],
    include: {
      model: User,
      attributes: [],
    },
    where: { id: userStampId },
  });

  return userStamp;
};

const findUserStampById = async (userStampId: number): Promise<UserStamp> => {
  return await UserStamp.findByPk(userStampId);
};

export { findAllUserStamp, findUserStamp, findUserStampById };
