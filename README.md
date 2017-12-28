# [NPI](http://mckaycr.github.io/npi)
This project is meant for validating National Provider Identification numbers.  It started as just a tool to verify if a 10 digit number was a valid NPI, then became a tool which cleans and searches any size string for possible NPI.
## Verification
This module will verify the following things, after it has cleansed the input of all non-numeric characters according to the [Requirements for National Provider Identifiers](https://www.cms.gov/Regulations-and-Guidance/Administrative-Simplification/NationalProvIdentStand/Downloads/NPIcheckdigit.pdf)

- The NPI must be 10 characters in length
- The NPI must only start with a 1 or 2
- The NPI must match its check digit
## Properties
- `raw`: a string that represents the value being verified.  This value has been cleansed of any non-numeric characters.
- `npi`: a string that represents the NPI portion of the input.  In otherwords, the first 9 digits of the 10 digit NPI.
- `checkDigit`: a string that represents the 10th character in the input, or the check digit used to validate the first 9 digits.
- `isValid` : a boolean indicating whether or not the NPI passed all validation checks.
- `npis`: an array of objects with the same exact structure as it's parent.  If an input length is greater than 10, it conduct a sub-string search of possible NPI within the input, and return the results here.
- `errors`: an array of errors objects that describe any validation failures.
    + `name`: error title.
    + `message`: error message.
    + `results`: this will show the part of the input that failed.

## Example
```
var NPI = require('../src/NPI.js')
var npi = new NPI('1234567893')
console.log('The raw input is ' + npi.raw)
console.log('The non check digits are ' +npi.npi)
console.log('The check digit is '+ npi.checkDigit)
console.log('The NPI is valid: '+ npi.isValid)
```

## Results
```
The raw input is 1234567893
The non check digits are 123456789
The check digit is 3
This NPI is valid: true
```

## Credit

- [jasonmorganson/npi](https://github.com/jasonmorganson/npi)
- [CMS](https://www.cms.gov/Regulations-and-Guidance/Administrative-Simplification/NationalProvIdentStand/Downloads/NPIcheckdigit.pdf)

>***Affiliation Disclosure***: *This project and it's contributors are in no way affiliated with the Centers for Medicare and Medicaid Services.  No compensation is received for work performed on this project.   This project is quite simply a tool for its contributors to hone in on their JavaScripting skills.  Hope you enjoy it, and feel free to contribute.*