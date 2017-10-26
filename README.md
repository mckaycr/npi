# [NPI](http://mckaycr.github.io/npi)

This project is meant for validating National Provider Identification numbers

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