// 1. declare function
// No Parametrised function
function greeting() {
    // code to be executed.
    console.log("The programming gods are pleased");
}

// 2. function invocation // function calling
greeting();

// Parametrised function

function showMessage(name){
    console.log("The Meessage for greater good is given by!",name);
}

showMessage("Mario");
showMessage(123456);
showMessage(true);


function calculateAge(name,yearOfBirth){

    if(name && yearOfBirth && typeof name=="string" && typeof yearOfBirth =="number"){
        console.log(`Hi ${name} , Your Age is , ${2020-yearOfBirth}`);
    } else {
        console.log("Please provide valid name and age !");
    }
}

// calculateAge("John Smith",1990);
calculateAge(111,"1990");