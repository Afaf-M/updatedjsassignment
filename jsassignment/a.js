// alert("Saying hi from a different file!");
// let status = "new";
// let scared = true;
// if (status === "new") {
// console.log("Welcome to JavaScript!");
// if (scared) {
// console.log("Don't worry you will be fine!");
// } else {
// console.log("You're brave! You are going to do great!");
// }
// } else {
// console.log("Welcome back, I knew you'd like it!");
// }
//let age=7; 
//age=10;
//console.log(age);
//string value definition

//let x =  7
//``backtics for adding more variables or values in a value
//let name = `iqra "s" ${x}`;
//let xy = "guhik \"hjuh\""
//console.log(xy);
//increment
//a=7
//console.log(--a);
//console.log(a++);
//console.log(a--);
// and both need to be true &&
//or either 1 can be true ||
// not both are false !
//1.1 hello world! done
//1.2 make and link JS file done
//1.3 as follows
/*  let status = "new";
let scared = true;
if (status === "new") {
 console.log("Welcome to JavaScript!");
 if (scared) {
 console.log("Don't worry you will be fine!");
 } else {
 console.log("You're brave! You are going to do great!");
 }
} else {
 console.log("Welcome back, I knew you'd like it!");
}
*/
//CHAPTER 2 PROJECT Miles-to-kilometers converter
 // Define a variable for the distance in miles
 /*function convertAndDisplay() {
    // Ask the user for a distance in miles
    var milesInput = prompt("Enter a distance in miles:");

    // Check if the input is valid and not canceled
    if (milesInput !== null && milesInput !== "") {
        // Parse the input as a number
        var miles = parseFloat(milesInput);

        // Check if it's a valid number
        if (!isNaN(miles)) {
            // Convert miles to kilometers
            var kilometers = miles * 1.60934;

            // Display the result using an alert
            alert(`The distance of ${miles} miles is equal to ${kilometers.toFixed(4)} kilometers`);
        } else {
            // Alert for an invalid input
            alert("Invalid input. Please enter a valid number.");
        }
    } else {
        // Alert for canceled input
        alert("Conversion canceled.");
    }
}
*/
//Chapter 1 project
console.log("Hi I'm Afaf!");
//multiple line comments done
//1.4 done in class
console.log(Math.floor(Math.random() * 100));

/*Practice 2.1
What are the types of these variables listed below? Verify this with typeof and
output the result to the console:
let str1 = 'Laurence';
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000;

console.log(typeof str1);  // Outputs: "string"
console.log(typeof str2);  // Outputs: "string"
console.log(typeof val1);  // Outputs: "undefined"
console.log(typeof val2);  // Outputs: "object" (Note: null is of type "object" in JavaScript)
console.log(typeof myNum);  // Outputs: "number"
*/


/* Practice exercise 2.2
Create a variable for your name, another one for your age, and another one for
whether you can code JavaScript or not.
*/


/*Practice 2.3
Write some code to calculate the hypotenuse of a triangle using the Pythagorean
theorem when given the values of the other two sides. The theorem specifies that the
relation between the sides of a right-angled triangle is a2 + b2 = c2
*/

// Function to calculate the hypotenuse
// Prompt the user for the value of 'a'
const inputA = prompt("Enter the value of 'a':");

// Prompt the user for the value of 'b'
const inputB = prompt("Enter the value of 'b':");

// Convert the input to numbers (assuming valid input)
const a = parseFloat(inputA);
const b = parseFloat(inputB);

// Check if the input is valid numbers
if (!isNaN(a) && !isNaN(b)) {
    // Calculate the hypotenuse using the Pythagorean theorem
    const c = Math.sqrt(a * a + b * b);
    console.log(`The hypotenuse of the triangle with sides 'a'=${a} and 'b'=${b} is approximately ${c.toFixed(2)}`);
} else {
    console.log("Invalid input. Please enter valid numbers for 'a' and 'b'.");
}
