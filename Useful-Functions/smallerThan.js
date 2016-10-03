function smallerThan(array, num){
    var smaller = [];
    for(var i = 0; i < array.length; i++){
        if(array[i] < num){
            smaller.push(array[i]);
        }
    } return smaller;
}