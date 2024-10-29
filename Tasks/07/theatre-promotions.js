//A theatre is doing a ticket sale, but they need a program to calculate the price of a single ticket. If the given age does not fit one of the categories, you should print "Error!".  You can see the prices in the table below:

function solve(dayType, age) {
    let result;
    switch(dayType) {
        case 'Weekday':
            if (0 <= age && age <= 18) {
                result = '12$';
            } else if (18 < age && age <= 64) {
                result = '18$';
            } else if (64 < age && age <= 122) {
                result = '12$';
            } else {
                result = 'Error';
            }
            break;

        case 'Weekend':
            if (0 <= age && age <= 18) {
                result = '15$';
            } else if (18 < age && age <= 64) {
                result = '20$';
            } else if (64 < age && age <= 122) {
                result = '15$';
            } else {
                result = 'Error';
            }
            break;

        case 'Holiday':
            if (0 <= age && age <= 18) {
                result = '5$';
            } else if (18 < age && age <= 64) {
                result = '12$';
            } else if (64 < age && age <= 122) {
                result = '10$';
            } else {
                result = 'Error';
            }
            break;

        default:
            result = 'Error';
            break;
    }
    console.log(result);
}

solve('Weekday', 42);
solve('Holiday', -12);
solve('Holiday', 15);