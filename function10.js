
function largest(a,b) {
    if(typeof a == "number" && typeof b == "number") {
        if(a > b) {
            return a;
        } else if(a < b) {
            return b;
        }else {
            return "not a valid entry";
        }
    }
    else if(typeof a == "string" && typeof b == "string"){
        if (a.length > b.length) {
            return a;
        }else if(a.length < b.length) {
            return b;
        } else {
            return "not a valid entry";
        }
    }else {
        return "wrong";
    }
}

console.log(largest('cat','dog'));