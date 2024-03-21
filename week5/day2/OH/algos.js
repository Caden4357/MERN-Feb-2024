// 1st problem from HackerRank
// Link ---> https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true



// 2nd problem 
// write a function call areThereDuplicates that takes in a variable number of arguments and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern.
// ! hint use the spread operator to convert the arguments into an array
// Examples:
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
// areThereDuplicates('a', 'b', 'c', 'd') // false

// 3rd problem 
// https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true



// ! Hint: use the frequency counter pattern
// * Frequency counter
// * frequency counters using objects to collect values/frequencies of values 
// * this is good to avoid nested loops or O(n^2) operations with arrays/strings
// 'hello' -> {h:1, e:1, l:2, o:1}

// const frequencyCounter = (str) => {
//     const frequency = {}
//     for(let i = 0; i < str.length; i++){
//         if(frequency[str[i]]){
//             frequency[str[i]]++
//         }else{
//             frequency[str[i]] = 1;
//         }
//     }
//     return frequency
// }
// console.log(frequencyCounter('hello')); //  {h:1, e:1, l:2, o:1}
