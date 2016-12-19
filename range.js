module.exports =  function(start, end, step){
    var arr = [];
    for(var i = start; i <= end; i+=step)
        arr.push(i);
    return arr;
}