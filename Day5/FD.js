// function demo (a) {
//   console.log(a);
// }
// demo("hello");
// function sum (a, b) {
//   return a + b;
// }

// console.log("the sum of the numbers is :"+sum(10+10,10));
//create a function it should perform arthemetic operation for two numbers input should be taken from the user
let a = parseInt(prompt("Enter the first number"));
let b = parseInt(prompt("Enter the second number"));
function arithmetic(a,b){
  console.log("The sum of the numbers is :"+(a+b));
  console.log("The difference of the numbers is :"+(a-b));
  console.log("The product of the numbers is :"+(a*b));
  console.log("The division of the numbers is :"+(a/b));
  console.log("The increment of the number a is :"+(++a));
  console.log("The decrement of the number b is :"+(--b));
}
arithmetic(a,b);