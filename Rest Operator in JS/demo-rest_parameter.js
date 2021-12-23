//Rest operator = ...
//...args is the rest paramter here in sum function
//Calculate sum of the list of numbers as an argument send to a function.
const sum = (... args) => {
	let total = 0;
	for(const a of args) {
		total += a;
	}
	return total;
}

console.log(sum(10,20,30)); //Prints the value of total return from sum arrow function.
//Output : 60

//-----------------------------------------------------------------------------------------------------

//Another demonstration to multiply the list of numbers sent as an argument to a function.
//Rest parameter = productArgs
const product = (...productArgs) => {
	return productArgs.reduce((previous, current) => {
	  return previous * current;
	});
  }
  
  console.log(product(1, 2, 3));
  //Output : 6
  
  console.log(product(1, 2, 3, 4));
  //Output : 24