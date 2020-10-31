let makeFullName =  (first_name,last_name,callback) => {
    return callback(first_name,last_name);
}

let _generate = (a,b) => {
    return a + " " +b;
}

let res = makeFullName("Super","Mario",_generate);
console.log(res);
