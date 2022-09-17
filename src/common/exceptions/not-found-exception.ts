import { StatusCode } from "../type";

export class NotFoundException extends Error {
  private readonly statusCode: StatusCode;

  constructor(message: string) {
    super(message);
    this.statusCode = StatusCode.NOT_FOUND;
  }
}
