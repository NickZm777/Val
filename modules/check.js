
export function checkType(value, requiredType) {
    // eslint-disable-next-line valid-typeof
    return typeof value === requiredType;
  }
  
export function nonEmptyString(value) {
    return value.length > 0;
  }
  
export function numberInRange(value, min, max) {
    return min <= value && value <= max;
  }
    