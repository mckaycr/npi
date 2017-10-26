function NPI(string){
	var lastCharacter = string.slice(-1);
	var checkDigit = Number(lastCharacter);
	var npi = string.substr(string.length-10,9);
	this.raw = string,
	this.npi = npi,
	this.checkDigit = checkDigit,
	this.isValid = function(callback){
		var npi = this.npi
		var sum = sumNPI(npi)+24
		var checkDigit = (sum*9) % 10
		callback(this.checkDigit === checkDigit)
	};
	function sumNPI(string){
		var total = 0
		var npiArray = string.split('');
		npiArray.reverse()
		npiArray.forEach(function(n){
			var idx = npiArray.indexOf(n)
			var parity = idx % 2 == 0
			if(parity){
				total+= Number(sumDigits(n * 2))
			}else{
				total+=Number(n)
			}
		})
		return total
	};
	function sumDigits(input){
		var tmp = input.toString()
		var arr = tmp.split('')
		var total = 0
		arr.forEach(function(n){
			total = Number(total) + Number(n)
		})
		return total
	};
}
module.exports = NPI