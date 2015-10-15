

function angle (aNum) {
       if ( aNum === 90) {
        console.log("It's a right Angle");
    } else if (aNum <= 90 && aNum > 0) {
        console.log("It's an acute Angle");
    } else if (aNum == 180) {
        console.log("It's a straight Angle");
    } else if (aNum < 180 && aNum > 90) {
        console.log("It's a obtuse Angle");
    } else if (aNum >180 && aNum < 360) {
        console.log("It's a reflex Angle");
    } else if (aNum == 360) {
        console.log("It's a Circle ");
    } else {
        console.log("this is not a valid number");
    }
}

angle(25);
angle(60);
angle(80);
angle(90);
angle(150);
angle(180);
angle(250);
angle(360);
angle(400);