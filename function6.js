

function greaterOrLess(num1,num2) {
    if (num1 > num2) {
        return true;
    }else if (num1 < num2) {
        return false;
    }else if(num1 == num2) {
        return num1 + " " + "is equal to" + " " + num2
    }
    else {
        return "that is not a number";
    }
}

console.log(greaterOrLess(3,2));
console.log(greaterOrLess(2,2));
console.log(greaterOrLess(2,3));
console.log(greaterOrLess("what is up dog"));