import Utilities from './Utilities'

/**
 * NPI
 * National Provider Identifier (NPI)
 * Represents a National Provider Identifier (NPI)
 */
class NPI {

  /**
   * @param {String} string - a NPI string.
   */
  constructor (string) {

    // Get the last character from the string
    const lastCharacter = string.slice(-1)

    // Parse the last character as an integer
    const checkDigit = Utilities.parseInteger(lastCharacter)

    // Set the start and end of the NPI in the string
    const endOfNPI = string.length - 1
    const startOfNPI = string.length - 10

    // Get the NPI substring from the raw string
    const npi = string.substring(startOfNPI, endOfNPI)

    this.raw = string
    this.npi = npi
    this.checkDigit = checkDigit
  }

  /**
   * Checks if the NPI is valid.
   */
  get isValid () {

    const npi = this.npi
    let sum = 0
    let isAlternate = true
    let position = npi.length

    while (position--) {

      // Get the NPI character at the current position
      const character = npi.charAt(position)

      // Parse the character as an integer
      const integer = Utilities.parseInteger(character)

      // If in the alternate position
      if (isAlternate) {

        // Double the integer and sum its digits and then add it to the sum
        sum += Utilities.sumDigits(Utilities.doubleInteger(integer))
      }

      // If not in the alternate position add the integer to the sum directly
      else sum += integer

      // Toggle alternate position
      isAlternate = !isAlternate
    }

    // Calculate the check digit from the sum using modulus 10
    const checkDigit = sum % 10

    return this.checkDigit === checkDigit
  }

  /**
   * Convert th NPI to a string.
   * @return {String} the NPI string.
   */
  toString () {

    return String(this.raw)
  }
}

export default NPI

