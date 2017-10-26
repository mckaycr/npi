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
				npi.isValid(function(results){
					expect(results).to.equal(true)
				})
				done();
			})
		})
		describe('for prefixed NPIs which are valid',function(){
			it('should return true',function(done){
				var string = '808401234567893'
				var npi = new NPI(string)
				npi.isValid(function(results){
					expect(results).to.equal(true)
				})
				done();
			})
		})
		describe('for invalid NPIs',function(){
			it('should be false',function(done){
				var string='1234567891';
				var npi = new NPI(string);
				npi.isValid(function(results){
					expect(results).to.equal(false)
				})
				done();				
			})
		})
	})
});