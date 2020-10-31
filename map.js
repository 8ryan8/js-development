let userMap = new Map();

userMap.set("first_name","Robbin");
userMap.set("last_name","Stark");
userMap.set(1,"Rank");
userMap.set({},"Empty Obj");
userMap.set([],"Empty Array");

console.log(userMap);
console.log(userMap.get("first_name"));
console.log(userMap.get({}));
console.log(userMap.delete("last_name"));
userMap.clear()
