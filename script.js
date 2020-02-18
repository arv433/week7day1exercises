/* ---------------------- ONE ---------------------- */
// Write a function take takes a string argument
// Return the number of characters in the argument
// i.e. return 5 when the argument is 'hello'
function length(str) {
    return str.length
}

/* ---------------------- TWO ---------------------- */
// Write a function takes a number argument
// Return a boolean for whether if the argument is even
// i.e. return true when the argument is 2
function isEven(num) {
    return num % 2 === 0
}

/* ---------------------- THREE ---------------------- */
// Write a function with a string argument
// Return a boolean for whether if the argument has an even number of characters
// i.e. return false when the argument is 'hello'
function hasEvenChars(str) {
    return isEven(length(str))
}

/* ---------------------- FOUR ---------------------- */
// Write a function with a string argument
// Return the number of vowels in the argument
// i.e. return 2 when the argument is 'hello'
function numVowels(str) {
    return str.split('').reduce((acc, letter) => ['a', 'e', 'i', 'o', 'u'].includes(letter) ? acc + 1 : acc, 0)
}

/* ---------------------- FIVE ---------------------- */
// Write a function with a string argument
// Return the argument with its letters in alphabetical order.
// i.e. return 'ehllo' when the argument is 'hello'
function alphabetize(str) {
    return str.split('').sort().join('')
}
