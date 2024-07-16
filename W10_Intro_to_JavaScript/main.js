/*******************************************
* Title:   INFT1206 - 05 - Week 10 Demo
* Author:  Clint MacDonald
* Date:    July 16, 2024
* Purpose: Introduction to JavaScript
*******************************************/    

// 3 ways to run this code
// 1) integrated into a web page (activated via an event)
// 2) Run in VS Code via terminal console window
// 3) Run in Browser Development mode console window

// Our first Program
console.log("Hello World");
console.log       ("Hello World");

// variables and using them
var myTeacher = 'Clint';
console.log(myTeacher);

console.log(myteacher);

/* JavaScript uses Command Blocks (i.e. curly braces {  }   )to treat a group of statements as a single entity */

/* Variable Types
    - String 
    - Number (integer)
    - Number (float)
    - Boolean
    - undefined, null, object, function, infinity, NaN (Not a Number)

    LOOSELY TYPED LANGUAGE (variants, auto-conversion)

    */

var varName = "Summer";
console.log(varName);
console.log( typeof(varName));
varName = 2024;
console.log(varName);
console.log( typeof(varName));

// pre-defined data type values
console.log(12/0);

// undefined values
var x;
console.log(x);

/* Expressions
1) arithmetic   (evaluates to a number)
2) string       (alphanumeric)
3) logical      (boolean only)
*/
// some examples

var s1 = '172';
var s2 = '172' + 4;
var s3 = 172 + '4';
var n1 = 172 + 4;

console.log(s1);
console.log(s2);
console.log(s3);
console.log(n1);

/* if - else if - else */
var grade, mark = 73;

if (mark >= 90)
    grade = 'A+';
else if (mark >= 80)
    grade = 'A';
else if (mark >= 70)
    grade = 'B';
else if (mark >= 60)
    grade = 'C';
else if (mark >= 50)
    grade = 'D';
else 
    grade = 'F';

console.log('Your grade: ' + grade);


// Switch Case
var semester = 2;

switch (semester) {
    case 1:
        console.log("dbase, comm, math");
        break;
    case 2: 
        console.log("web1, oop1, syd1");
        break;
    case 3:
        console.log("oop2, web2");
        break;
    default:
        console.log("could not determine the semester correctly!");
        break;
}

/* Ternary Operator */
// like an if statement, but based solely on true/false (boolean) on one line

const age = 19;
var status = (age >= 18) ? 'adult' : 'child';
console.log(status);

// LOOPS
// for loop
// for in/as loop
// while loop
// do-while loop

// for loop
var days = 'The days in July: \n';
for (var i = 1 ; i <= 31 ; i++ ) {
    days += i + '\n';
    // same as -> days = days + i + '\n';
}
console.log(days);

// for-in loop
var student = { name:'John', program:'CPA', semester: 2  };
// JavaScript objects are defined by a series of key-value pairs
var str = 'Student info:\n\n';

for (var x in student) {
    str += x + ': ' + student[x] + '\n';
}
console.log(str);

// while loop
var text = '';
var i = 0;
 while (i < 10) {
    text += "\nThe number is: " + i++;
 }
 console.log(text);


 // do-while  (loop-until)

 var i = 9;
 do {
    console.log('week ' + ++i);
 } while (i < 15);

 // break and continue
 // try to avoid break!

 var i = 1;
 while (i < 5) {
    console.log('week ' + i);

    if (i==3) break;
    else i++;    
 }

 // continue
var week = 1, day = 1;

while (week < 5) {
    console.log('week: ' + week);

    for (var day = 1; day <= 7; day++) {
        if (day==3) {continue;} // skip it

        console.log('day: ' + day + ' of week: ' + week);
    }
}

// beginning Functions (User Defined Function)
function functionName(parameter1, parameter2) {
    console.log("Do Stuff Here");
}
var f = functionName('Clint','MacDonald');

// example of a function
function squaredNumber(inputNumber) {
    return inputNumber * inputNumber;
}

console.log(squaredNumber(5));


// example of a sub-routine (does not return anything)
var go = function() {
    console.log("Go Raps Go, We The North!");
};
go();
console.log(typeof(go));