const empId = (function(){
    let count =0;
    return function(){
        count ++;
        return `empId : ${count}`
    }
})();

console.log("Alex: " ,empId());
console.log("John: ",empId());
