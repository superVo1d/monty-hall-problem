export const formatFloat: (number: number) => number = (number: number) =>
  Math.round(number * 1000) / 1000 || 0;
