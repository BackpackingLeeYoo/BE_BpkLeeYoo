import { StatusCode } from "../type";

export class BadRequestException extends Error {
  private readonly statusCode: StatusCode;

  constructor(message: string) {
    super(message);
    this.statusCode = StatusCode.BAD_REQUEST;
  }
}
