// calculator without callback
let calculate = function(number1,number2,operation){
    if(operation == "add"){
        return number1 + number2;
    }
    if(operation == "sub"){
        return number1 - number2;
    }
    if(operation == "mul"){
        return number1 * number2;
    }
    if(operation == "div"){
        return number1 / number2;
    }

}
console.log(calculate(29,39,"sub"));


// callback -> a callback is function passed as an argument to another function in hope 
// that it will get executed at certain time.


let add = function(a,b){
    return a+b;
}

let sub = function(a,b){
    return a-b;
}

let mull = function(a,b){
    return a*b;
}

let div = function(a,b){
    return a/b;
}


let calculator  = function (num1,num2,callback){
    let res = callback(num1,num2);
    console.log(res);
    
}


calculator(100,20,add);
calculator(100,20,sub);
calculator(100,20,mull);
calculator(100,20,div);