//Write a function that prints all the numbers from 1 to j (inclusive) each on a separate line.

function solve(j) {
    // Check if j is a number and a whole number
    if (typeof j !== 'number' || !Number.isInteger(j)) {
        console.log('Input must be a whole number!');
        return; // Exit the function if input is invalid
    }
    
    // Loop from 1 to j if input is valid
    for (let i = 1; i <= j; i++) {
        console.log(i);
    }
}

solve(5);         // Expected output: 1 2 3 4 5
solve('Lion');    // Expected output: Input must be a whole number!
solve(5.5);       // Expected output: Input must be a whole number!
