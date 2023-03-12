export class NotFoundException extends Error {
  private readonly status: number;

  constructor(message?: string, status?: number) {
    super(message);
    this.status = status || 404;
    this.name = "NotFoundError";
    if (!message) this.message = "요청한 정보를 찾을 수 없습니다.";
  }
}
