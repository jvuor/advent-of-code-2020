export function findMinimum(array: number[]): number {
  return array.reduce((min, cur) => (cur < min) ? cur : min, Infinity);
}
