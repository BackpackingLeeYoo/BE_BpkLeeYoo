export class TypeChecker {
  public static isNull(value: any) {
    return !value;
  }

  public static isBlank(value: string) {
    return value == '';
  }

  public static isNumeric(str: string) {
    if (typeof str != 'string') {
      return false;
    }

    return !isNaN(Number(str));
  }

  public static isEmptyArray(array: any[]) {
    if (array.length == 0) {
      return true;
    }

    return false;
  }
}
