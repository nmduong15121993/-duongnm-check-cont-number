function checkContNumber(contNumber) {
  if (!contNumber || !/^[A-Z]{4,4}[0-9]{7,7}$/.test(contNumber)) return false;

  let index = 0;
  let sum = 0;
  for (let char of contNumber) {
    sum += ALPHABET[char] * Math.pow(2, index++);
    if (index >= contNumber.length - 1) {
      break;
    }
  }
  return (sum % 11) % 10 == contNumber[contNumber.length - 1];
}

const ALPHABET = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 12,
  C: 13,
  D: 14,
  E: 15,
  F: 16,
  G: 17,
  H: 18,
  I: 19,
  J: 20,
  K: 21,
  L: 23,
  M: 24,
  N: 25,
  O: 26,
  P: 27,
  Q: 28,
  R: 29,
  S: 30,
  T: 31,
  U: 32,
  V: 34,
  W: 35,
  X: 36,
  Y: 37,
  Z: 38,
};

module.exports = checkContNumber;
