export interface UserParams {
  userId?: string;
  email: string;
  nickname: string;
  profileImg?: string;
  refreshToken?: string;
}

export enum StatusCode {
  OK = 200,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export enum ErrorMessage {
  INTERNAL_SERVER_ERROR = "서버문제로 응답할 수 없습니다.",
  UNAUTHORIZED_ERROR = "유효하지 않은 토큰입니다.",
  BAD_REQUEST_ERROR = "잘못된 요청입니다.",
  NOT_FOUND_ERROR = "응답을 찾을 수 없습니다.",
}
