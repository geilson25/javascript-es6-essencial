function fn() {
	log('Hoisting de função');

	function log(value) {
		console.log(value);
	}
}

fn();








/*function fn() {
	console.log(text);

	var text = 'Exemplo';

	console.log(text);
}

fn();*/