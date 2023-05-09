//! NOTE: Underscores ( _ ) before property names in a constructor are meant to warn
//! developers that the properties are meant to be private, and only accessed using 
//! a GETTER or SETTER

// As of JavaScript version ES2022, there is a way to do this built-in, called 
// "private flags". You use a hash ( # ) before a property name to make an 
// attribute private. For this demonstration, we will NOT be using this feature

//* More info on Private Flags:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields

// Naming convention for classes is also to UpperCamelCase 
// instead of regular camelCase


//! Creating a class using JS -------------------------------
//* More info on JS Classes:
// https://www.w3schools.com/js/js_classes.asp

// This class uses the CONSTRUCTOR method (constructor is a keyword) and passes 2
// properties, and one method called "userGreeting"

//* Since we are not passing anything else, we can export this as DEFAULT *

export default class User {
    constructor(email, name) {
        this._id = email;
        this._name = name;
    }
    userGreeting() {
        return `Hi, my name is ${this._name}.`
    }
}