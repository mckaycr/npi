var NPI = require('../src/NPI.js')
var npi = new NPI('1234567893')
console.log('The raw input is ' + npi.raw)
console.log('The non check digits are ' +npi.npi)
console.log('The check digit is '+ npi.checkDigit)
npi.isValid(function(results){
	console.log('This NPI is valid: ' + results)
})