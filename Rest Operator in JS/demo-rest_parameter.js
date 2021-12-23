
//Rest operator = args
const sum = (... args) => {
	let total = 0;
	for(const a of args) {
		total += a;
	}
	return total;
}

console.log(sum(10,20,30));