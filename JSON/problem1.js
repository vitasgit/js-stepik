
let student = {
  name: 'Vitaly',
  age: 22,
  wife: null,
  money: undefined
};

let info = {
	job: 'megafon',
	id: 18412006
};

let jsonStudent = JSON.stringify(student);


function computeJSON(json,obj){
	json = JSON.parse(json);
	obj = Object.assign(json, obj);
	json = JSON.stringify(obj);

	return console.log(json);
}

computeJSON(jsonStudent, info);