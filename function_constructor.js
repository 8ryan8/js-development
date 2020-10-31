// function constructor -> Any function can be a function constructor.
// function constructor is used to create dynamic object of same type eg> user, person,product.

let user = {
    name:"Mario",
    age:30,
    isMarried:true,
    address:"Mario street"
}
console.log(user);
console.log("Name: " + user.name+ " Age :"+user.age);

// User cnstructor 
function User(name,age,isMarried,address) {
    this.name = name;
    this.age= age;
    this.isMarried = isMarried;
    this.address = address;
}

let user1 = new User("Mario",30,true,"Mario Street");
let user2 = new User("Super Mario",100,true,"Super Mario Street");
console.log(user1.name);
console.log(user2.name);




