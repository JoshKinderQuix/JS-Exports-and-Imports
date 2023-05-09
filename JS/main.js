// !NOTE: 
// JavaScript modules only work when a web page is delivered to the browser 
// by a web server. Unlike simple JavaScript which runs when a browser 
// directly accesses a file (using a file:// URL), you must launch a local web 
// server to view a web page that uses modular JavaScript. 

//****Do this by using the LIVE SERVER extension in VS Code****



//!--------- Section 1 (uncomment each section for example code) --------------------------
//** Go to import.js ** 

//importing default from *import.js*
//Note that we need the ".js" file extension!! Don't forget it!
import greeting from "./import.js";

//importing the other exported functions
import {
    goodbye,
    loading
} from "./import.js";

//* Testing
//! Uncomment and open a live server > devtools > console to see it work
//---------

// console.log(greeting())
// console.log(goodbye())
// console.log(loading())

//---------



//!--------- Section 2 --------------------------------------------------------------------

// We can use the "as" keyword followed by a desired name to rename our 
// imported functions. This is called a NAME SPACE

import {
    goodbye as sayBye,
    loading as simsQuote
} from "./import.js";

//* Testing
//! Uncomment and open a live server > devtools > console to see it work
//---------

// console.log(sayBye());
// console.log(simsQuote())

//---------



//!--------- Section 3 --------------------------------------------------------------------

//** Go to simpleMath.js **

//We can use the universal selector ( * ) to import all functions in the 
//file at the same time. We can call these in a similar way to methods, 
//using dot notation followed by the function caller ie: nameSpace.functionName(args)
//Arguments are, of course, not required unless the function expects them
import * as simpleMath from "./simpleMath.js"


//* Testing
//! Uncomment and open a live server > devtools > console to see it work
//---------

// console.log(simpleMath.addFive(2));
// console.log(simpleMath.subtractFive(3));
// console.log(simpleMath.multiplyFive(5));
// console.log(simpleMath.noArgs())

//---------

//! NOTE: If the universal selector ( * ) is used to export from a file that includes
//! a default function, you will be required to call that function using "default" as 
//! the function name for your default function. 
//ie: nameSpace.default(args)



//!--------- Section 4 --------------------------------------------------------------------

//* Go to *userClass.js*

//import the User class
import User from "./userClass.js";

//Creating a new User object using our class constructor, 
//just like with object constructors
const josh = new User("joshua.kinder@quotumtech.com", "Josh")


//* Testing
//! Uncomment and open a live server > devtools > console to see it work
//---------

// console.log(josh)
// console.log(josh.userGreeting())

//---------