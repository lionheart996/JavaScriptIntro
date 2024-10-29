//Write a function that receives a single number and checks if the grade is excellent or not.  If it is, print "Excellent", otherwise print "Not excellent".

function solve(num) {
    if(num < 5.5){
        console.log('Not excellent');
    } else{
        console.log('Excellent');
    }
}

solve(4.35)
solve(5.50)