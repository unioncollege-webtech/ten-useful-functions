module.exports = function (val){
    return function(value){
        return (value >= val);
    }
}