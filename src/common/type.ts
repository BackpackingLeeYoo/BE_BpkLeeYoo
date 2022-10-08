import { Types } from "mongoose";

export enum StatusCodeEnum {
  OK = 200,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export enum ErrorMessageEnum {
  INTERNAL_SERVER_ERROR = "서버문제로 응답할 수 없습니다.",
  UNAUTHORIZED_ERROR = "유효하지 않은 토큰입니다.",
  BAD_REQUEST_ERROR = "잘못된 요청입니다.",
  NOT_FOUND_USER = "로그인 후 이용해주세요.",
  NOT_FOUND_ERROR = "응답을 찾을 수 없습니다.",
  WRONG_EXTENSION = "잘못된 파일 형식입니다.",
}
export interface UserParams {
  userId?: Types.ObjectId;
  email: string;
  nickname: string;
  profileImg?: string;
  refreshToken?: string;
  stamps: StampParams[];
}

export interface StampParams {
  stampId?: Types.ObjectId;
  stampName: string;
  stampImage: string;
  latitude: number;
  longitude: number;
  isStamp?: boolean;
  stampComment?: string;
  weatherTemp?: string;
  weatherIcon?: string;
  createdAt?: string;
  userId?: Types.ObjectId;
}
