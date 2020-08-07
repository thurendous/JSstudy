//Evaluate these:
//#1
[2] === [2] // false 
{ } === {}  // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // 4
const object2 = object1; // 4
const object3 = object2; // 4
const object4 = { a: 5 }; // 5
object1.a = 4;
// primitive types are copied and objects are referenced. so when you change the other one varible, primitive types will not change, and the objects changes. 


//#3 create two classes: an Animal class and a Mamal class. 
class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.color = color;
        this.type = type;
    }
}

class Mamal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
    }
    introduce() {
        return `Mooo I'm just a little ${this.color} ${this.type}, whose name is ${this.name}`;
    }
}

// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

const cow = new Mamal("joodie", "cow", "red and white");