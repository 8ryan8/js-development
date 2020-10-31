let outerCount = 10;  // global variable

function counter (){
    let innerCount = 30;  // local inner counter methoddd varaible 
    function add() {  // -> this add function is called as clouser
        let totalCount = outerCount + innerCount; // inner totalCount
        return totalCount;
    }
    return add();
}

console.log(innerCount);

console.log( counter() );
