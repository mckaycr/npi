var expect = require("chai").expect;
var NPI = require('../src/NPI.js');

describe('NPI',function(){
	describe('instantiation',function(){
		it('should have expected properties',function(done){
			var npi = new NPI('1');
			expect(npi, 'to have properties',['raw','npi','checkDigit'])
			expect(npi).to.have.own.property('isValid')
			done()
		})
		it('should set raw value',function(done){
			var test = '123'
			var npi = new NPI(test)
			expect(npi.raw).to.be.a.string
			expect(npi.raw).to.equal(test)
			done();
		})
		it('should set check digit to the last character',function(done){
			var npi = new NPI('123')
			expect(npi.checkDigit).to.equal(3)
			done();
		})
	});
	describe('isValid',function(){
		describe('for unprefixed NPIs which are valid',function(){
			it('should return true',function(done){
				var string='1234567893';
				var npi = new NPI(string);
				expect(npi.isValid).to.equal(true)
				done();
			})
		})
		// describe('for prefixed NPIs which are valid',function(){
		// 	it('should return true',function(done){
		// 		var string = '808401234567893'
		// 		var npi = new NPI(string)
		// 		expect(npi.isValid).to.equal(true)
		// 		done();
		// 	})
		// })
		describe('for invalid NPIs',function(){
			it('should be false',function(done){
				var string='1234567891';
				var npi = new NPI(string);
				expect(npi.isValid).to.equal(false)
				done();				
			})
		})
		describe('for NPI not meeting the length requirements',function(){
			it('should be false',function(done){
				var string='860434455';
				var npi = new NPI(string);
				expect(npi.isValid).to.equal(false)
				done();				
			})
		})
		describe('for NPI not starting with 1 or 2',function(){
			it('should be false',function(done){
				var string='5171560001';
				var npi = new NPI(string);
				expect(npi.isValid).to.equal(false)
				done();				
			})
		})
	})
	describe('cleansing',function(){
		describe('for any given string',function(){
			it('should provide an array of possible npi within the string',function(done){
				var string = 'G456278A12345678935481'
				var npi = new NPI(string)
				expect(npi.npis).to.be.an('array')
				expect(npi.npis[1].raw).to.equal('1234567893')
				expect(npi.npis[1].isValid).to.equal(true)
				// expect(npi.npis).to.include('1298657423')
				// expect(npi.npis).to.include('2986574235')
				done();
			})
		})
	})
});