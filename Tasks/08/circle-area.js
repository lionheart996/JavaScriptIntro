//Write a function that takes a single argument as input. Check the type of input argument. If it is a number, assume it is the radius of a circle and calculate the circle area. Print the area rounded to two decimal places.

function solve(input){
    let result;
    let inputType = typeof(input);
    if (inputType === 'number') {
        result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

solve(5)
solve('name')