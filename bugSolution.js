function foo(a, b) {
  // Explicit type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return "Invalid input: Please provide numbers";
  }
}

console.log(foo(2, 3)); // 5
console.log(foo(2, "3")); // Invalid input: Please provide numbers
console.log(foo("2", 3)); // Invalid input: Please provide numbers
console.log(foo("2", "3"));// Invalid input: Please provide numbers

//Alternative solution using parseInt()
function foo2(a,b){
  return parseInt(a) + parseInt(b);
}
console.log(foo2(2,3)); //5
console.log(foo2(2,"3"));//5
console.log(foo2("2",3));//5
console.log(foo2("2","3"));//5