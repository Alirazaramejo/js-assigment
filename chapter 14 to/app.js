// ***********************chapter14&16****************************************

// ************Question1*****************

// var studentNames = [];
// studentNames[0] = "ali";
// studentNames[1] = "zeeshan";
// studentNames[2] = "raja";
// studentNames.push("razaali");
// studentNames.push("ehsan");
// studentNames.push("azeem");
// document.write(studentNames)

// **************Question2****************

// var studentNames = new Array();
// studentNames[0] = "ali";
// studentNames[1] = "aliyan";
// studentNames[2] = "zeeshan";
// studentNames.push("raja");m
// studentNames.push("razaali");
// studentNames.push("azeem");
// document.write(studentNames)

// *************Question3**********************

// var star= ["the","is", "string"]
// document.write(star)
// *************Question4**********************

// var number= [1,2,3]
// document.write(number)

// *************Question5**********************

// var boaln= [true]
// document.write(true)
// *************Question6**********************

// var mix= [true,1,"string"]
// document.write(mix)

// *************Question7**********************

// var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("Education Qualifications in Pakistan:<br>" + educationQualifications.join("<br>"));

// *************Question8**********************
// var studentNames = ["ali", "zeeshan", "raja"];
// var studentScores = [450, 480, 410];
// var totalMarks = 500;

// document.write("<table><tr><th>Student Name</th><th>Score</th><th>Percentage</th></tr>");
// for (var i = 0; i < studentNames.length; i++) {
//   var percentage = (studentScores[i] / totalMarks) * 100;
//   document.write("<tr><td>" + studentNames[i] + "</td><td>" + studentScores[i] + "</td><td>" + percentage.toFixed(2) + "%</td></tr>");
// }
// document.write("</table>");

// *************Question9**********************

// const colors = ['red', 'green', 'blue'];
// document.write(colors);
// a 
// const colorToAdd = prompt("What color do you want to add to the beginning?");
// colors.unshift(colorToAdd);
// document.write(colors);
// b 
// const colorToAdd = prompt("What color do you want to add to the end?");
// colors.push(colorToAdd);
// document.write(colors);
// c 
// colors.unshift('purple', 'pink');
// document.write(colors);
// d 
// colors.shift();
// document.write(colors);
// e
// colors.pop();
// document.write(colors);
// f
// const index = parseInt(prompt("At what index do you want to add a color?"));
// const colorToAdd = prompt("What color do you want to add?");
// colors.splice(index, 0, colorToAdd);
// document.write(colors);
// g 
// const index = parseInt(prompt("At what index do you want to add a color?"));
// const colorToAdd = prompt("What color do you want to add?");
// colors.splice(index, 0, colorToAdd);
// document.write(colors);

// *************Question10**********************
// let studentScores = [92, 86, 95, 88, 76, 95];
// studentScores.sort()

// document.write("Student Scores: " + studentScores);

// *************Question11**********************
// const cities = ["London", "Paris", "New York", "Berlin", "Tokyo"];
// const selectedCities = cities.slice(0, 3);
// document.write("<br>Cities: <br>", cities);
// document.write("<br>Selected Cities: <br>", selectedCities);

// *************Question12**********************
// var arr = ["This", " is", " my", " cat"];
// var singleString = arr.join("");

// document.write(singleString);
// *************Question13**********************
// var array = [];
// array.unshift("value1");
// array.unshift("value2");
// array.unshift("value3");
// document.write(array.shift()); 
// document.write(array.shift()); 
// document.write(array.shift()); 

// *************Question14**********************
// var myArray = [];
// myArray.push("element1");
// myArray.push("element2");
// myArray.push("element3");
// document.write(myArray.pop());
// document.write(myArray.pop());
// document.write(myArray.pop());
// *************Question15**********************
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
//   document.write("<select>");
//   for (var i = 0; i < manufacturers.length; i++) {
//     document.write("<option>" + manufacturers[i] + "</option>");
//   }
//   document.write("</select>");
// **************************chapter17&20*******************
// *************Question1**********************
// var emptyArray = [];
// emptyArray[0] = [];
// emptyArray[1] = [];
// emptyArray[2] = [];

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

