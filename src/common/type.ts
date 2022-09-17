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

export interface CustomError extends Error {
  statusCode: number;
}
