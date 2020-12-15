
function modify(robotId, number) {
	var result = 1;
	console.log(`${robotId}` + `${++number}`);
	return result;
}

modify("jsbot", 123);