/**
 * A set of helper utilities.
 */
class Utilities {

  /**
   * Parses an input given as a number or string into an integer.
   * @param {Number|String} number - input to parse.
   * @throws {Error} if the input can not be parsed into an integer.
   * @returns {Number} a integer.
   */
  static parseInteger (number) {

    number = Number(Number.parseInt(number))

    if (Number.isNaN(number)) throw new Error('Not a number')

    return number
  }

  /**
   * Doubles the value of a given integer
   * @param {Number|String} integer - parsed as an integer.
   * @throws {Error} if the input can not be parsed into an integer.
   * @returns {Number} the integer multiplied by two.
   */
  static doubleInteger (integer) {

    integer = this.parseInteger(integer)

    return integer * 2
  }

  /**
   * Sums the value of the digits in a given integer
   * @param {Number|String} integer - parsed as an integer.
   * @throws {Error} if the input can not be parsed into an integer.
   * @returns {Number} the sum of the digits in the integer.
   */
  static sumDigits (integer) {

    integer = this.parseInteger(integer)

    let sum = 0

    while (integer > 0) {

      sum += integer % 10
      integer = Math.floor(integer / 10)
    }

    return sum
  }
}

export default Utilities
