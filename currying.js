function soma(a) {
	return function (b) {
		return a + b;
	}
}

const soma2 = soma(2);

console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));





/*function init () {
	const exemplo = 'Essa variável';

	return function () {
		console log('1 - O valor de variável exemplo é: ${exemplo}. ');

		return function () {
		console log('2 - O valor de variável exemplo é: ${exemplo}. ');

			return function () {
			console log('3 - O valor de variável exemplo é: ${exemplo}. ');
			}
		}
	}
}

init()*/