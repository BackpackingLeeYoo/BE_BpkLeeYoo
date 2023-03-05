export class ValidationError extends Error {
  private readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status || 412;
    this.name = "ValidationError";
  }
}
