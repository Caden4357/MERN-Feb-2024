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

// Refactored
// const frequencyCounter = (str) => {
//     const frequency = {}
//     for (let char of str) {
//         frequency[char] = (frequency[char] || 0) + 1
//     }
//     return frequency
// }
// console.log(frequencyCounter('hello')); //  {h:1, e:1, l:2, o:1}




// Valid anagram
// a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// 'aaz', 'zza' -> false
// 'anagram', 'nagaram' -> true
// 'rat', 'car' -> false
// cinema iceman -> true
// caden bob -> false

// compare the length of each string if not equal return false 
// start with a frequency counter for each string 
// compare the 2 to see if they match 
const anagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false
    }
    const frequencyOfStr1 = {}
    for (let char of str1) {
        if (frequencyOfStr1[char]) {
            frequencyOfStr1[char]++
        } else {
            frequencyOfStr1[char] = 1;
        }
    }
    // loop through str2 subtracting from the freq count if its found else return false 
    for(let char of str2){
        if(!frequencyOfStr1[char]){
            return false 
        }
        frequencyOfStr1[char] -= 1
        console.log(frequencyOfStr1);
        
    }
    return true
}
console.log(anagram('aaz', 'zza')); // false
// console.log(anagram('cinema', 'iceman')); // true
// console.log(anagram('anagram', 'nagaram')); // true
// console.log(anagram('rat', 'car')); // false
