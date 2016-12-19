var title = "union college is the best college in the united states";

function startCase(string, all){
    if(all){
        return string.split(' ').map(function(arr)){
            return startCase(arr, false);
        }).join(' ');   
    } else {
    return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

console.log(title.map(startCase));
