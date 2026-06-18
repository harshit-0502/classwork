// object dattype

let person ={
    name: "Gopal",
    age: 19,
    city : "Kasganj"
};

console.log(person);
console.log(person.name);
console.log(person.age);

// array datatype

let numbers = [1,2,3,4,5];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[4]);

// array with multiple datatype

let mixedArray =  [1,"Hello",true,{ name : "Gopal"},[1,2,3]];
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);
console.log(mixedArray[4]);

// 3 main operation on array 

// 1. Map       2. filter         3. reduce

// map craetes a new array by applying a function to each elememt of 

let newarray = [1,2,3,4,5];
let sqauredarray = newarray.
map(num => num*num);
console.log(sqauredarray);

//filter on array
// filter creates a new array with all elements that pass the test implememted by the provided function

let evenNumbers =[1,2,3,4,5];
let filteredEvenNumbers = evenNumbers.
filter(num=>num %2 ===0);
console.log(filteredEvenNumbers);

// reduce an array 
// reduce can be used to reduce an array to
// accumulator is the accumulated value previous 
// if supplied value and current value is the current

let sum = [1,2,3,4,5];
let total = 
sum.reduce((accumulator,currentValue)=> accumulator + currentValue,2);
console.log(total);
