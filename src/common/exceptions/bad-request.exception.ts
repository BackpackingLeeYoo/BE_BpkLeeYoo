export class BadRequestException extends Error {
  private readonly status: number;

  constructor(message?: string, status?: number) {
    super(message);
    this.status = status || 400;
    this.name = "BadRequestError";
    if (!message) this.message = "잘못된 요청입니다.";
  }
}
