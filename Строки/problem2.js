/*На вход вашей функции подаётся строка из нескольких слов через пробел, вам нужно первую букву каждого слова сделать заглавной и объединить все слова через "-", как показано в примере.*/

// object oriented programming
// Object-Oriented-Programming

var result = [];

function modify(str) {
	var arr = str.split(" ");

	for (var i = 0; i <= arr.length - 1; i++) {
		arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase());
		result.push(arr[i]);
	}

	result.join('-');

	return console.log(result.join('-'));
}

modify("hello world");
