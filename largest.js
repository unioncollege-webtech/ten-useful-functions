function largestOfTwo(num1, num2)//returns the larger of two numbers
{
    if(num1>num2)
    {
        return num1;
    }
    else
    {
        return num2;
    }
}


console.log(largestOfTwo(4,5));
console.log(largestOfTwo(5, 4));
console.log(largestOfTwo(5,5));

var large =  [10, 564, 401, 2753, 48, 401].reduce(largestOfTwo);

console.log(large);
