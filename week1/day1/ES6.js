// * Scope - var, let & const
// * 3 main types of scope are: Global, Function, Block

// * var is func scoped if not defined globally 
// * both let and const are blocked scoped 
// * block scoped variables cannot be redeclared 
// * let can be reassinged 
// * const cant be either 
let caden = 'Caden';
caden = 'Bob'
console.log(caden);

const jane = 'Jane';
console.log(jane);

// * const when using data structures 
// const instructor = {
//     name:'Caden',
//     age:26,
//     hobbies:['Gaming', 'Hiking', 'Playing Piano']
// }
// instructor.name = 'Bob'
// instructor.homeState = 'WA'
// console.log(instructor);

// const nums = [1,2,3,4]
// nums[0] = 12
// nums[5] = 5
// nums = [] // Error! 



// * Arrow functions 
// ES5 function using the function keyword 
function multiplyNums(num1, num2){
    return num1*num2
}
console.log(multiplyNums(1,2));

// * Using arrow function syntax introduced in ES6
// const multiplyNumsArrow = (num1, num2) => {
//     return num1*num2
// }
// console.log(multiplyNumsArrow(1,2));

// * simplified with implicit returns 
const multiplyNumsArrow = (num1, num2) => num1*num2
console.log(multiplyNumsArrow(1,2));

const numTimesTwo = num1 => num1*2
console.log(numTimesTwo(1,2));


// * Destructuring 
const instructor = {
    name:'Caden',
    age:26,
    hobbies:['Gaming', 'Hiking', 'Playing Piano']
}
const nums = [1,2,3,4]
// const instructorName = instructor.name
// console.log(instructorName);
// const firstNum = nums[0]
// console.log(firstNum);
// * Instead! Destructure 
const {name, age, hobbies} = instructor
console.log('Hello ' + name + ' You are ' + age + ' Years old');
const [,,secondItem] = nums
console.log(secondItem);

// * Rest and Spread 
// In summary, the rest operator is used to collect function arguments into an array, while the spread operator is used to spread the elements of an iterable (like an array or object) into individual elements or properties. They are syntactically similar but used in different contexts.
const numsDup = [...nums, 5]
console.log(numsDup);
console.log(nums);

// * objects
const newInstructor = {...instructor, name: 'Greg'}
console.log(newInstructor);
// * Ternary operator
let isHuman = false;
// if(isHuman){
//     console.log('Human');
// }else{
//     console.log('Alien');
// }
isHuman? console.log('Human'): console.log('Alien');

// * Put it together 

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
const [,,anotherRandomCar] = cars
//Predict the output
console.log(randomCar) // Telsa
console.log(otherRandomCar) // Mercedes



// const isOldEnough = (age) => {
//     return age >= 18? 'You are old enough': 'You must be 18 or older'
// }

const isOldEnough = age => age >= 18? 'You are old enough': 'You must be 18 or older'
console.log(isOldEnough(18)); // 'You are old enough'
console.log(isOldEnough(17)); // 'You must be 18 or older'
console.log(isOldEnough(19)); // 'You are old enough'  
