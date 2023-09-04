// *************Question1**********************
// var emptyArray = [];
// emptyArray[0] = [];
// emptyArray[1] = [];
// emptyArray[2] = [];yy

// document.write(emptyArray);
// *************Question2**********************
// var matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
//   ];
//   document.write(matrix);
// *************Question3**********************
// for (var i = 1; i <= 10; i++) {
//   document.write(i);
// }
// *************Question4**********************
// let number = parseInt(prompt("Enter a number for multiplication table:"));
// let length = parseInt(prompt("Enter the length of the table:"));

// document.write("<h2>Multiplication table of " + number + "</h2>");
// for (let i = 1; i <= length; i++) {
//   document.write(number + " x " + i + " = " + number * i + "<br>");
// }
// *************Question5**********************
// var fruits = ["apple<br>", "banana<br>", "mango<br>", "orange<br>", "strawberry<br>"];

// for (var i = 0; i < fruits.length; i++) {
//   document.write(fruits[i]);
// }
// // *************Question6**********************
// document.getElementById("counting").innerHTML = Array.from({length: 15}, (_, i) => i + 1).join(', ');
// document.getElementById("reverseCounting").innerHTML = Array.from({length: 10}, (_, i) => 10 - i).join(', ');
// document.getElementById("even").innerHTML = Array.from({length: 11}, (_, i) => i * 2).join(', ');
// document.getElementById("odd").innerHTML = Array.from({length: 10}, (_, i) => i * 2 + 1).join(', ');
// document.getElementById("series").innerHTML = Array.from({length: 10}, (_, i) => (i + 1) * 2 + 'k').join(', ');
// *************Question7**********************
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var search = prompt("Enter item to search in the list:");

// var found = false;
// for (var i = 0; i < A.length; i++) {
//   if (A[i] == search) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   alert("Item found in the list");
// } else {
//   alert("Item not found in the list");
// }

// *************Question8**********************
// let A = [24, 53, 78, 91, 12];

// let largest = A[0];
// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }

// console.log("The largest number in the array is: " + largest);

// *************Question9**********************
// const A = [24, 53, 78, 91, 12];

// let smallest = A[0];
// for (let i = 1; i < A.length; i++) {
//   if (A[i] < smallest) {
//     smallest = A[i];
//   }
// }

// console.log(`The smallest number is ${smallest}.`);
// *************Question10**********************
// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }



//chap20to25















//question 1
// var firstNum = prompt("Enter First Name ?");
// var lastNum = prompt("Enter Last Name ?");
// var fullName =firstNum +" " + lastNum ;
// document.write("your full name is " ,fullName);
//question 2
// var a = prompt("Enter favorite mobile phone model.");
// document.write("My favorite mobile phone model is:" , a , "<br/>");
// document.write("Lenght of string is :",a.length)
//question 3
// var ind = "pakistan";
// var find = ind.indexOf("n");
// console.log(find)
//question 4
// var ind = "Hello World";
// var find = ind.lastIndexOf("l");
// console.log(find);
//question 5
// var ind = "Pakistani";
// var find = ind.indexOf("i");
// console.log(find);
//question 6
// var q = "Pakistani";
// var q1 = "I am ";
// var ans = q1.concat(q);
// console.log(ans);
//question 7
 //output in html file paragraph
//   var inputString = "Hyderabad";

 
//   var modifiedString = inputString.replace("Hyder", "Islam");


//   var outputElement = document.getElementById("output");
//   outputElement.textContent = "Original string: " + inputString + "<br>Modified string: " + modifiedString;
//   console.log(outputElement)

//question 8
   
    // var message = "Ali and Sami are best friends. They play cricket and football together.";

    // var modifiedMessage = message.split("and").join("&");

    // var outputElement = document.getElementById("output");
    // outputElement.textContent = "Original message: " + message + "<br>Modified message: " + modifiedMessage;

//question 9
// const stringValue = "472";
// const numberValue = Number(stringValue);
//question 10



// var myInput = document.getElementById("psw");
// var letter = document.getElementById("letter");
// var capital = document.getElementById("capital");
// var number = document.getElementById("number");
// var length = document.getElementById("length");

// // When the user clicks on the password field, show the message box
// myInput.onfocus = function() {
//   document.getElementById("message").style.display = "block";
// }

// // When the user clicks outside of the password field, hide the message box
// myInput.onblur = function() {
//   document.getElementById("message").style.display = "none";
// }

// // When the user starts to type something inside the password field
// myInput.onkeyup = function() {
//   // Validate lowercase letters
//   var lowerCaseLetters = /[a-z]/g;
//   if(myInput.value.match(lowerCaseLetters)) {
//     letter.classList.remove("invalid");
//     letter.classList.add("valid");
//   } else {
//     letter.classList.remove("valid");
//     letter.classList.add("invalid");
// }

//   // Validate capital letters
//   var upperCaseLetters = /[A-Z]/g;
//   if(myInput.value.match(upperCaseLetters)) {
//     capital.classList.remove("invalid");
//     capital.classList.add("valid");
//   } else {
//     capital.classList.remove("valid");
//     capital.classList.add("invalid");
//   }

//   // Validate numbers
//   var numbers = /[0-9]/g;
//   if(myInput.value.match(numbers)) {
//     number.classList.remove("invalid");
//     number.classList.add("valid");
//   } else {
//     number.classList.remove("valid");
//     number.classList.add("invalid");
//   }

//   // Validate length
//   if(myInput.value.length >= 8) {
//     length.classList.remove("invalid");
//     length.classList.add("valid");
//   } else {
//     length.classList.remove("valid");
//     length.classList.add("invalid");
//   }
// }

//question 11

//question 12
//question 13
//question 14
//question 14
//question 14
//question 14
//question 18
function countOccurrences(text, targetWord) {
    // Convert both the text and the target word to lowercase for case-insensitive matching
    const textLower = text.toLowerCase();
    const targetWordLower = targetWord.toLowerCase();

    // Split the text into words using spaces as separators
    const words = textLower.split(' ');

    // Initialize a counter for the target word occurrences
    let count = 0;

    // Iterate through each word and check if it matches the target word
    for (const word of words) {
        if (word === targetWordLower) {
            count++;
        }
    }

    return count;
}

const inputString = "The quick brown fox jumps over the lazy dog";
const target = "the";
const occurrences = countOccurrences(inputString, target);
console.log(`Number of occurrences of "${target}" in the string: ${occurrences}`);
