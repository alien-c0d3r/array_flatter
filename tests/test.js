var flatter = require('./../array_flatter');
var assert = require('chai').assert;

describe('Array', function(){
  describe('final array length', function(){
    it('should return legth equal to the legth of all individual arrays summed', function(){

    	var flattened_array=flatter('./data/sample_array.json');
    	//since for testing we use the sample_array, we know that all individual arrays length summed is 13
      assert.equal(true, flattened_array.length==13);
      
    })
  })
})