// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 1
// =============================================================================
//
// TASK: Prime Number Checker
//
// Write a JavaScript program that checks whether a given number is prime.
//
// A prime number is a whole number greater than 1 that has no divisors
// other than 1 and itself (e.g., 2, 3, 5, 7, 11, 13 ...).
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_01_prime_checker.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLES
// -----------------------------------------------------------------------------
//
//   Enter a number: 7
//   7 is a prime number.
//
//   Enter a number: 10
//   10 is NOT a prime number.
//
//   Enter a number: 1
//   1 is NOT a prime number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement the logic inside a function (see scaffold below).
// - Numbers less than 2 are NOT prime — handle this inside the function.
// - The main() function must call isPrime() and print the result.
// - Use readlineSync.questionInt() to read integer input from the user.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================




const readlineSync = require('readline-sync');

 
// this is what this function does: 
// It checks if a number is prime
// A prime number is > 1 and has no divisors except 1 and itself
function isPrime(num) {

    // this is what this function does: 
    // Check if number is less than 2. If yes, it cannot be prime
    if (num < 2) {
        return false;
    }
    
    
    // this  function does: 
    // 2 is the only even prime number
    if (num === 2) {
        return true;
    }
    
    
    // this  function if  Any other even number is not prime
    if (num % 2 === 0) {
        return false;
    }
    
    
    // this function checks for divisors from 3 up to the square root of the number, skipping even numbers: 
    // If any divisor is found, the number is not prime
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    
    
    // this is what this function does: 
    // If no divisors were found, then the number is prime
    return true;
}

 
// this is what this function does: 
// It takes user input and calls isPrime to check the number
// Then it prints whether the number is prime or not
function main() {

    // this function ask the user to enter an input : 
 
    const number = readlineSync.questionInt('Enter a number: ');
    
    
    // this function prints out the result of the prime check
    if (isPrime(number)) {
        console.log(`${number} is a prime number.`);
    } else {
        console.log(`${number} is NOT a prime number.`);
    }
}

 
// this  starts the  program by calling the main function: 

main();
