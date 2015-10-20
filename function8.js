
function greaterNum(num1, num2) {

    if (num1 > num2) {
        return num1;
    }else if (num1 < num2) {
        return num2;
    }else if(num1 == num2) {
        return num1 + " " + "is equal to" + " " + num2
    }
    else {
        return "that is not a number";
    }
}

console.log(greaterNum(3,2));
console.log(greaterNum(2,2));
console.log(greaterNum(2,3));
console.log(greaterNum("what is up dog"));