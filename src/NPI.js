function NPI(string){
	string = string.replace(/[^\d]/g, '');
	var lastCharacter = (string.length>=10?string.substr(9,1):string.slice(-1));
	var checkDigit = Number(lastCharacter);
	var npi = (string.length>=10?string.substr(0,9):string.substr(0,string.length-1));
	this.raw = string,
	this.npi = npi,
	this.checkDigit = checkDigit,
	this.isValid = validation(this.npi, this.checkDigit)
	this.npis = (string.length>10?list(string):[])
	// This function looks for possible NPI in the substrings of
	// original input if the original input is greater than 10 digits.
	// This I think needs to be refactored, I hate this function.
	function list(string){
		temp_array = string.split('');
		var indices = []
		var p_npi = []
		temp_array.forEach(function(i, index){
			if(i=='1'||i=='2'){
				indices.push(index)
				if(index!=0 && string.substr(index,10).length==10){
					var tmp = string.substr(index,10) 
					var possible_npi = {
						raw:tmp,
						lastCharacter:tmp.substr(9,1),
						checkDigit:Number(tmp.slice(-1)),
						npi:tmp.substr(tmp.length-10,9),
						isValid:validation(tmp.substr(tmp.length-10,9),Number(tmp.slice(-1)),true)
					}
					p_npi.push(possible_npi)						
				}
			}
		})
		return p_npi
	};	
	function validation(npi,checkDigit,subSwitch){
		var string = npi+checkDigit
		var results = {
			status:true,
			descriptions:[]
		}
		if(string.length!=10){
			results.status=false
			results.descriptions.push('NPI does not meet length requirement. the length is:'+ string.length)
		}
		if(npi.substr(0,1)!='1' && npi.substr(0,1)!='2'){
			results.status = false
			results.descriptions.push('NPI does not start with 1 or 2. First character is:'+ npi.substr(0,1))
		}
		if(checkDigit != luhn(npi)){
			results.status = false
			results.descriptions.push('NPI failed Luhn verification check')
		}
		if(subSwitch){
			results.descriptions.push('This NPI is a result of a substring search')
		}
		return results
	}
	function luhn(string){
		var total = 0
		var npiArray = string.split('');
		npiArray.reverse()
		var idx = 0
		npiArray.forEach(function(n){
			idx++
			var num = Number(n)
			var parity = idx % 2 == 0
			if(parity){
				total+=num
			}else{
				total+= digitSum(num * 2)
			}
		})
		results = (((total+24)*9)%10)
		return results
	};

	function digitSum(input){
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