var str = "Tom,Bob,Alice,Sam";

function filterPersons(str){
	var res="";
    
    str = str.split(",");

	for (let val of str) {
	        if (val != "Sam") {
	        	res += val;
	        }
	    }

	console.log(res);
}

filterPersons(str);


