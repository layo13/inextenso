var increment = function(number) {
	let add = false,
		digit = null;
	for (var i = number.length - 1; i >= 0; --i) {

		if (i === (number.length - 1) || add) {
			digit = number[i] + 1;
		} else {
			digit = number[i];
		}
		if (digit >= 10){
			digit = digit - 10;
			add = true;
		} else {
			add = false;
		}
		number[i] = digit;
	}
	if (add) {
		number.unshift(1);
	}
	return number;
};

const testcases = [
  [0],
  [9],
  [1,2,3],
  [9,9,9]
];

for (let testcase of testcases) {
  let text = testcase.join('') + ' => ';
  increment(testcase);
  text += testcase.join('')+'<br />'
  document.getElementById('app').innerHTML += text;
}