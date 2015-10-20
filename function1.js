

function angle (aNum) {
       if ( aNum === 90) {
        return "It's a right Angle";
    } else if (aNum <= 90 && aNum > 0) {
        return"It's an acute Angle";
    } else if (aNum == 180) {
        return"It's a straight Angle";
    } else if (aNum < 180 && aNum > 90) {
        return"It's a obtuse Angle";
    } else if (aNum >180 && aNum < 360) {
        return"It's a reflex Angle";
    } else if (aNum == 360) {
        return "It's a Circle ";
    } else {
        return"This is not a valid number";
    }
}

 
console.log(angle());
console.log(angle(60));
console.log(angle(80));
console.log(angle(90));
console.log(angle(150));
console.log(angle(180));
console.log(angle(250));
console.log(angle(360));
console.log(angle(400));


