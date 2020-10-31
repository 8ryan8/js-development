function User(first_name,last_name,age,address) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.age= age;
    this.address = address;
}

User.prototype.natinality = "Indian";

User.prototype.calculateAge = function (yearOfBith){
    console.log(`Hi user ${this.first_name} with age ${2020-yearOfBith}` );
    return 2020-yearOfBith;
}


let user1 = new User("John","Smith",30,"John Street");
console.log(user1);
console.log(`The user is , ${user1.first_name} with nationality
 ${user1.natinality} and age ${user1.calculateAge(1990)}`);

console.log()

let user2 = new User("Mario","Smith",30,"John Street");
console.log(user2);
console.log(`The user is , ${user2.first_name} with nationality
 ${user2.natinality} and age ${user2.calculateAge(1990)}`);




