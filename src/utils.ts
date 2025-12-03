export function formatNumber(
  value: number,
  fractionDigits: number = 2
): string {
  if (value % 1 === 0) {
    return value.toString();
  } else {
    return value.toFixed(fractionDigits);
  }
}
