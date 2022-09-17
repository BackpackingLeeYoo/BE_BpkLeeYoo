import { StatusCode } from "../type";

export class UnauthorizedException extends Error {
  private readonly statusCode: StatusCode;

  constructor(message: string) {
    super(message);
    this.statusCode = StatusCode.UNAUTHORIZED;
  }
}
