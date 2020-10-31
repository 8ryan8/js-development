console.log("Statement 1");
console.log("Statement 2");
// blocking code.
// setTimeout(function(){
//     console.log("Statement 3");
// },2000);

setTimeout(()=>{
    console.log("Statement 3");
},2000);


console.log("Statement 4");
console.log("Statement 5");
