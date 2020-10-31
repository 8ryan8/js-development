for(let x = 0; x<5;x++) {
    console.log(x);    
}


/// var has function level scope
// let has block level scope.
// const will not allow you to reasigned the value.

let first_name= "Mario";

first_name = "John";

console.log(first_name);

const last_name = "Kim";

// last_name = "John";
console.log(last_name);

const arr = ["john","mike","david"];
arr[0] = "marry";
console.log(arr);


