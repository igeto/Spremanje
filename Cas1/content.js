// GIT

/*
    1. Download Git
    2. Create a new repository
    2.1 Go to github.com and login to your profile (create new profile)
    2.2 Create new repository and copy the url link generated for the new repository
    3. Open a local folder when you would like to save your git repository and open a terminal at that location
    3.1 in the terminal type 'git clone [repository URL]' - this will clone the empty repository
    3.2 type git checkout -b master to create the master branch
    3.3 Create your project's structure
    4. When you are done with your project's structure you can upload your changes to your remote repo
    5. This is achieved in three stages, @ your local repo you have three so called trees: Working directory, Index and HEAD
        - Working Directory are the actual files you are working on
        - Index is the staging area, here we will put files that we want to commit for uploading
        - HEAD is the commit area where we keep our last commit
    6. After we have commited some files 'git commit -m ['Message goes here']' we use the command
    'git push origin [branch_name]' to push to the branch we want
    7. To get the latest version from the remote repository we use the 'git pull' command
 */





// 1. variables

let a; // (undefined)
let b = 2018; // (number)
let c = 'Some kind of text value'; // (string)
let d = true; // (boolean)

// declares and intializes 3 variables by matching the variable names and values on the same possitions in the arrays
const [e, f, g] = [1, 2, 3];
// another way of declaring and initializing variables where we ommit the repeated use of the keywoard const
const h = 1, i = 2, j = 3;

// 2. Operators

let a = 10;
let b = 2;

a += b; // same as a = a + b
a -= b; // same as a = a - b
a *= b; // same as a = a * b
a /= b; // same as a = a / b
a %= b; // same as a = a % b
a++ // short for a = a + 1
a-- // short for a = a - 1

++a // difference between a++ and ++a is that when we use a++ in a statement a will get incremented after the calculation of the statement whereas 
// ++a will first increment a then calculate the statement

// 3. Strings

// Concatenation versus interpolation

// Old way - concatenation

let b = 1988;
let a = 'The value of b is ' + b + ' which "by coincidence" is the year I\'m born';
let a = "The value of b is ' + b + ' which \"by coincidence\" is the year I\'m born";

// New way - interpolation

let a = `The value of b is ${b} which by coincidence is the year I'm born`

// 4. Functions

function myFunction() { // function signature
    // function body
}

let myEs6Function = () => { // function signature
    // function body
}

// Declare some functions using what we have learned so far

/*
    1. Declare a function that will accept two parameters and return their sum
    2. Declare a function that will accept two parameters and return their product
    3. Declare a function that will accept three parameters and return their mathematical calculation taking that two of the parameters are numbers
    and one is an operator
    4. 
 */

// Explain best practice of using the return keyword

// 5. Variable Scope

function dummyFunction() {
    let myVar = 'Hi there';
    console.log(myVar);
}

function dummyFunction2() {
    console.log(myVar);
    var myVar = 5;
}

function dummyFunction3() {
    console.log(myVar);
    let myVar = 5;
}

console.log(myVar)

// Explain difference between var and let

/* 
    var - can be redeclared multiple times in the same scope, when declared it travels to the top of the scope and exists everywhere but gets initialized at the line of declaration
    let - cannot be redeclared in the same scope, starts to exist from the line it declared at until the end of the scope its in, if called before declaration it will throw an error
    *BONUS*
    const - is a variable type that must be initialized upon declaration and once initialized it cannot be reinitialized
    good to know: array/object declared as const can still change its values/properties
    you can declare variable without any keyword in front of it but this is bad practice because it will automatically declare it as var or even worse you can override an existing variable
*/

// 6. If - Switch and for - while - do while

let a = true;
let b = false;

if(a) {
    console.log('I got here')
} else if (b) {
    console.log('Will I ever get here?')
}

// Discuss this function - there is something wrong with one of the statements, can you find it?
// Write a better function that pinpoints the correct statement that need to be shown
function whichIsBigger(a, b) {
    if (a >= b) {
        console.log(`${a} is bigger than or equal to ${b}`)
    } else {
        console.log(`${b} is bigger than or equal to ${a}`)
    }
}

// Discuss this switch example
function switchExample(num) {
    switch (num) {
        case 0:
            console.log(`You entered ${num}`);
            break;
        case 1:
            console.log(`You entered ${num}`);
        case 2:
            console.log(`You entered ${num}`);
        case 3:
            console.log(`You entered ${num}`);
        case 4:
            console.log(`You entered ${num}`);
        default:
            break;
    }
}