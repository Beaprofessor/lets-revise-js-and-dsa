// Q1  variables
let name = "John";
let age = 25;
let isStudent = true;

// Q2 Operators
let length = 5;
let width = 3;

let area = length * width;
// console.log(area);
// console.log(length === width)

// Q3 Control Structures:
// a
function checkNumber(number) {
  if (number % 2 == 0) {
    return "Number is even";
  } else {
    return "Odd";
  }
  return number;
}

console.log(checkNumber(22));

// b
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// c
let fruit = "apple ";

switch (fruit) {
  case "apple":
    console.log("Apple is red");
    break;

  case "berries":
    console.log("berries are blue");
    break;

  default:
    console.log("Banana");
}



// Q4 functions

function greet(name){
    return (`Hey ${name}`)
}
console.log(greet("Harry"))


const square = (number) => {
    
    return number * number
}

console.log(square(22))


// Q5... Arrays
const array = ["red" , "green" , "blue"]
console.log(array.concat('yellow'))

// Q6  ... Objects

let person = {
    name: "Alice",
    age: 30,
}

console.log(person.name)


// Q7... Strings

let sentence = "hello world"
console.log(sentence.toUpperCase())


// Q8 While loop

let num = 1
while(num<=5){
    console.log(num)
    num++
}

let numbers = 5
console.log("next part of the questions")
do{
    console.log(numbers)
    numbers--
}while(numbers>=1)



//  Q9  Error Handling

function division (a,b) {
    try{
        if(a!=0 || b!=0 ){
            return a/b
        }
    }
    catch{
        if(a=0 || b == 0 ){
            return("No division possible")
        }
    }
}
console.log(division(0,40))




// Q10 .. ADVANCED CONCEPTS

let array1 = [1,2,3,4,5]
function sumArray (arr) {
    let sum = 0
    for(let i = 0 ; i< arr.length ; i++)
    {
        sum+=arr[i]
    }
return sum
}

console.log(sumArray(array1))

