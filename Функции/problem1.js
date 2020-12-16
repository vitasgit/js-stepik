function pow (a, n) {
	let res = 1;

	while (n != 0) {
		res = a * res;
		n -= 1;
	}

	alert(res);
}

pow(100, 0);