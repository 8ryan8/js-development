// Es6 -> Js classes

class Employee {
    id;
    name;

    //only one construcotr per class.
    constructor(id,name){
        this.id = id;
        this.name = name;
    }

    getDetails(){
        console.log(`Employee Id ${this.id} and Name ,${this.name }`);        
    }
}

let emp1 = new Employee(101,"Super Mario");
let emp2 = new Employee(102,"Tonny Stark");

emp1.getDetails();
emp2.getDetails();