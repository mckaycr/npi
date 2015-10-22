import stream from 'stream'
import NPI from './NPI'

const Transform = stream.Transform

/**
 * Stream transform to validate NPIs.
 * Validates NPI strings piped through a stream.
 * @example
 *
 * import split from 'split'
 * import {NPIValidator} from 'npi'
 *
 * const validator = new NPIValidator()
 *
 * process.stdin
 * .pipe(split())
 * .pipe(validator)
 * .pipe(process.stdout)
 */
class NPIValidator extends Transform {

  /**
   * Transforms stream chunks.
   */
  _transform (chunk, encoding, processed) {

    const string = chunk.toString()

    if (string) {

      const npi = new NPI(string)

      this.push(`${npi} ${npi.isValid}\n`)
    }

    processed()
  }
}

export default NPIValidator
