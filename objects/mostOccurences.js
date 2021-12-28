// Write a function that accepts an array of letters. 
// It will return the letter that occurs the most amount of times.

//turn array variable into process.argv statement, 
// so it can take arguements from the terminal.
let array = ['b', 'h', 'a', 'g', 'w', 'a', 'n', 't'];

function mostOccurences(array) {
    const counter = {};
    //create a for loop that counts each character index 
    for (let character = 0; character < array.length; character++) {
        let char = array[character];
        //if array is empty, throw error
        if (char !== ' ') {
            // if array contains a number, throw error
            if (typeof counter[char] === "number") {
                //every occerence of individual character after first
                counter[char] += 1;
            } else {
                //first occurence of character
                counter[char] = 1;
            }
        }
    }
    return counter;
}

// examples
// mostOccurences(['a', 'b', 'b', 'c', 'd', 'd', 'e', 'e', 'e']); // returns 'e'
// console.log(array);
console.log(mostOccurences(array));