function NPI(string){
	var lastCharacter = string.slice(-1);
	var checkDigit = Number(lastCharacter);
	var npi = string.substr(string.length-10,9);
	this.raw = string,
	this.npi = npi,
	this.checkDigit = checkDigit,
	this.isValid = (this.checkDigit === (((sumNPI(npi)+24)*9)%10)?true:false),
	this.npis = (list(string))
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
	function list(string){
		numeric_string = string.replace(/\D/g,'');
		temp_array = numeric_string.split('');
		var indices = []
		var p_npi = []
		temp_array.forEach(function(i, index){
			if(i=='1'||i=='2'){
				indices.push(index)
				if(numeric_string.substr(index,10).length==10){
					tmp = numeric_string.substr(index,10)
					var possible_npi = {
						raw:tmp,
						lastCharacter:tmp.slice(-1),
						checkDigit:Number(tmp.slice(-1)),
						npi:tmp.substr(tmp.length-10,9),
						isValid:(Number(tmp.slice(-1)) === (((sumNPI(tmp.substr(tmp.length-10,9))+24)*9)%10)?true:false)
					}
					p_npi.push(possible_npi)
				}
			}
		})
		return p_npi
	};
}
module.exports = NPI