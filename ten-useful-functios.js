var cars = ["ferrari", "mustang", "challenger", "cobra"];

var car = "ferrari";

function toUpperCase(string) {
    return string.toUpperCase();
}

var car1 = toUpperCase(car);
var car2 = cars.map(toUpperCase);

console.log(car1);

//Second Function

var pets = ["CAT", "DOG", "BIRD", "TURTLE"];
var pet = "CAT";

function toLowerCase(string) {
    return string.toLowerCase();
}

var lowerCasePet = toLowerCase(pet);
var lowerCaseArray = pets.map(toLowerCase);

console.log(lowerCasePet);

//3rd Function
var cars = ["ferrari", "mustang", "challenger", "cobra"];

var car = "ferrari";

function toCapitalize(string) {
    return string.toCapitalize();
}
var carCapitalized = toCapitalize(car);
var carsCapitalized = cars.map(toCapitalize);

console.log(carCapitalized);

//4th Function

var toys = ["laser", "legos", "basketball"];

var toy = "laser";

function toTitleCase(string) {
    return string.toTitleCase();
}

var toyTitleCase = toTitleCase(toy);
var toysTitleCase = toy.map(toTitleCase());
console.log(toyTitleCase);

//5th Function

function multiply(a1, a2) {
    return a1 * a2;
}

var multiple = multiply(1, 2);
var multiple1 = multiple.every(multiply());

console.log(multiple1);

//6th Function

function subract(a1, a2) {
    return a1 - a2;
}

var subtracts = subract(2, 3);
var subtracted = subtracts.every(subract());

console.log(subtracted);

//7th Function

function addition(a1, a2) {
    return a1 + 2;
}

var add = addition(1, 2);
var adding = add.every(addition());

console.log(adding);

//8th function

function division(a1, a2) {
    return a1 / a2;
}

var divide = division(10, 5);
var dividing = divide.every(division());

console.log(dividing);

//9th function

function lessThan(a1, a2) {
    if (a1 < a2) {
        return "true";
    }

    else {
        return "nope";
    }
}

var entry1 = lessThan(10, 5);
var entry2 = entry1.every(lessThan());

console.log(entry2);

//10th Function

function greaterThan(a1, a2) {
    if (a1 > a2) {
        return "true";
    }
    
    else {
        return "nope";
    }
}

var input1 = greaterThan(5, 10);
var input2 = input1.every(greaterThan());

console.log(input2);