function NPI(string){
	var results = search(string.replace(/[^\d]/g, ''))
	var final = results[0]
	var remainder = results.slice(1);
	this.raw = final.raw,
	this.npi = final.npi,
	this.checkDigit = final.checkDigit,
	this.isValid = final.isValid
	this.npis = remainder
	this.errors = final.descriptions
// ************************************************************
// Search the entire string for anything that looks like an NPI
// return an array of possible NPI
// ************************************************************
	function search(string){
		temp_array = string.split('');
		var indices = [];
		var p_npi = [];
		temp_array.forEach(function(i, index){
			if(index==0 || i=='1'||i=='2'){
				indices.push(index)
				var tmp = string.substr(index,10);
				var isValid = validation(tmp.substr(tmp.length-10,9),Number(tmp.slice(-1)),true)
				var possible_npi = {
					raw:tmp,
					lastCharacter:tmp.substr(9,1),
					checkDigit:Number(tmp.slice(-1)),
					npi:tmp.substr(tmp.length-10,9),
					isValid: isValid.status,
					errors:isValid.descriptions
				};
				p_npi.push(possible_npi)						
			}
		})
		return p_npi
	};
// ************************************************************
// Generate error messages for each NPI
// ************************************************************
	function validation(npi,checkDigit,subSwitch){
		var string = npi+checkDigit
		var results = {
			status:true,
			descriptions:[]
		}
		if(string.length!=10){
			results.status=false
			results.descriptions.push({name:'Invalid Length',message:'NPI does not meet length requirement',results:string.length})
		}
		if(npi.substr(0,1)!='1' && npi.substr(0,1)!='2'){
			results.status = false
			results.descriptions.push({name:'Invalid Format',message:'NPI does not start with 1 or 2',results:npi.substr(0,1)})
		}
		if(checkDigit != luhn(npi)){
			results.status = false
			results.descriptions.push({name:'Validation Failed',message:'NPI failed Luhn verification check',results:checkDigit})
		}
		if(subSwitch){
			results.descriptions.push({name:'Possible NPI',message:'This NPI is a result of a substring search',results:subSwitch})
		}
		return results
	}
// ************************************************************
// Run each NPI through the Luhn algorithm to see if it checks
// out.
// ************************************************************
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
// ************************************************************
// a sub routine of the Luhn algorithm
// ************************************************************
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