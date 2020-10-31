// -> syntax  1) function decleartion and 2) function expression

greet("Mario");

// 1) function decleration
function greet(username){
    console.log("Today is good day ! ",username);
}

greet("Mario");


// 2) function expression
let message = function (name){
    console.log(`Tommorow is best day !`,name)
}
message("John Doe");

let message2 = function (name,age){
    console.log(`Hi You are ${name} with age ${age}`);
}
message2();
message2("Johny",32);

// Note : Hoisting is applicable on function decleartion not on function expression.
