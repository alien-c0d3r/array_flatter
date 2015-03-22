


function flatArray(array_file){
		  	
	  	var data = require(array_file);
	  	var arrays = data.data;
	  	
		var merged = [];
		merged = merged.concat.apply(merged, arrays);
	
		return merged;
	
}



module.exports=flatArray;