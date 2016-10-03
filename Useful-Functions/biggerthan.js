function biggerThan(array, num){
    var bigger = [];
    for(var i = 0; i < array.length; i++){
        if(array[i] > num){
            bigger.push(array[i]);
        }
    } return bigger;
}