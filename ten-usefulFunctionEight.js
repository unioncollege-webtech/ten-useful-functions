// Ten Useful Functions

//function 8
function greaterThan(a,b){
    while(true){
        if(b==a){
            return false;
        }
        if(b!==a){
            return true;
        }
        a++;
        b--;
    }
}