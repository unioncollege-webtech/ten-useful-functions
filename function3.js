//takes an object and makes an email addres for the person.



var people = {
    firstName: "cody",
    lastName: "moser"
}


function email (people) {
    return people.firstName + "." + people.lastName + "@ucollege.edu";
}
console.log(email(people));




/*function email (firstName, lastName) {
    console.log(firstName + "." + lastName + "@ucollege.edu");
}


email("cody","moser");

,{
    firstName: "john",
    lastName: "smith"
},{
    firstName: "barry",
    lastName: "allen"
}];
*/