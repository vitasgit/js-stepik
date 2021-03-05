function isIsogram(str){
	let isogramStr = str.toLowerCase().replace(/\s/g, '');
	let set = new Set(isogramStr);

	if (isogramStr.length == set.size) {
		return true;
	}
	else {
		return false;
	}
}

isIsogram('A bca');