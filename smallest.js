function smallestOfTwo(num1, num2)//returns the smaller of two numbers
{
    if(num1<num2)
    {
        return num1;
    }

    else if(num2<num1)
    {
        return num2;
    }
    else
    {
        return null;
    }
}

console.log(smallestOfTwo(4,5));
console.log(smallestOfTwo(5, 4));
console.log(smallestOfTwo(5,5));


var smallest = [10, 564, 401, 2753, 48, 401].reduce(smallestOfTwo);

console.log(smallest);