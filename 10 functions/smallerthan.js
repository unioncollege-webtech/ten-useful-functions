var numbers = [2,4,5,3,1,8,10,20,22,45,11,7,9,13,15,19,21];


function smallerthan(array, num){
    var smaller = [];
    for(var i = 0; i < array.length; i++){
        if(array[i] < num){
            smaller.push(array[i]);
        }
    } return smaller;
}        
console.log(smallerthan(numbers, 15));