var numbers = [60, 80,90, 150, 180, 250, 360, 400];

function angle (aNum) {
       if ( aNum === 90) {
        return "Right Angle";
    } else if (aNum <= 90 && aNum > 0) {
        return"Acute Angle";
    } else if (aNum == 180) {
        return"Straight Angle";
    } else if (aNum < 180 && aNum > 90) {
        return"Obtuse Angle";
    } else if (aNum >180 && aNum < 360) {
        return"reflex Angle";
    } else if (aNum == 360) {
        return "Circle ";
    } else {
        return"not a valid number";
    }
}

numbers.forEach(function(degree) {
  console.log("It's a %s", angle(degree));
});