//========chapter 17-20 =================
//question 1
//question 2
// let matrix = [
//     [0,1, 2, 3],
//     [1,0, 1, 2],
//     [2, 1, 0,1]
// ];
// console.log(matrix);

//question 3
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

//question 4

// let tableNumber = parseInt(prompt("Enter the table number:"));
// let tableLength = parseInt(prompt("Enter the table length:"));

// console.log(`Multiplication Table for ${tableNumber} (up to ${tableLength}):`);

// for (let i = 1; i <= tableLength; i++) {
    //     let result = tableNumber * i;
    //     console.log(`${tableNumber} * ${i} = ${result}`);
    // }
    
    
    //question 5
    //     let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
    
    // console.log("Fruits in the array:");
    // for (let i = 0; i < fruits.length; i++) {
        //     console.log(fruits[i]);
        // }
        
        //question 6
        // Function to generate and display a series
        // function generateAndDisplaySeries(seriesName, seriesArray) {
            //     document.write(`<b>${seriesName}:</b> ${seriesArray.join(', ')}<br>`);
            // }
            
            // // Counting: 1 to 15
            // let countingSeries = [];
            // for (let i = 1; i <= 15; i++) {
                //     countingSeries.push(i);
                // }
                // generateAndDisplaySeries("Counting", countingSeries);
                
                // // Reverse counting: 10 to 1
                // let reverseCountingSeries = [];
                // for (let i = 10; i >= 1; i--) {
                    //     reverseCountingSeries.push(i);
                    // }
                    // generateAndDisplaySeries("Reverse counting", reverseCountingSeries);
                    
                    // // Even: 0 to 20 (even numbers)
                    // let evenSeries = [];
                    // for (let i = 0; i <= 20; i += 2) {
                        //     evenSeries.push(i);
                        // }
                        // generateAndDisplaySeries("Even", evenSeries);
                        
                        // // Odd: 1 to 19 (odd numbers)
                        // let oddSeries = [];
                        // for (let i = 1; i <= 19; i += 2) {
                            //     oddSeries.push(i);
                            // }
                            // generateAndDisplaySeries("Odd", oddSeries);
                            
                            // // Series: 2k, 4k, ... 20k
                            // let seriesK = [];
                            // for (let i = 1; i <= 10; i++) {
                                //     seriesK.push(2 * i + "k");
                                // }
                                // generateAndDisplaySeries("Series", seriesK);
                                
                                //question 7
//                                 let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Function to search for an item in the array
// function searchItem(item) {
//     for (let i = 0; i < A.length; i++) {
//         if (A[i] === item) {
//             return true;
//         }
//     }
//     return false;
// }

// // Taking user input
// let userInput = prompt("Enter an item to search:");

// // Searching for the item
// let isItemFound = searchItem(userInput);

// // Displaying the result
// if (isItemFound) {
//     alert(`Yes, '${userInput}' is found in the list.`);
// } else {
//     alert(`No, '${userInput}' is not found in the list.`);
// }

                                //question 8
                                
                                //                                 let A = [24, 53, 78, 91, 12];
                                
                                
                                // let largestNumber = A[0];
                                
                                // // Loop through the array to find the largest number
                                // for (let i = 1; i < A.length; i++) {
                                    //     if (A[i] > largestNumber) {
                                        //         largestNumber = A[i];
//     }
// }

// // Display the largest number
// console.log(`The largest number in the array is: ${largestNumber}`);

//question 9
// let A = [24, 53, 78, 91, 12];


// let smallestNumber = A[0];

// // Loop through the array to find the smallest number
// for (let i = 1; i < A.length; i++) {
//     if (A[i] < smallestNumber) {
//         smallestNumber = A[i];
//     }
// }

// // Display the smallest number
// console.log(`The smallest number in the array is: ${smallestNumber}`);

//question 10
// for (let i = 1; i <= 20; i++) {
//     let multiple = 5 * i;
//     console.log(multiple);
// }
//                                               <<<<<<<<<<<<<<<<<<<<< Chapter 17 to 20 >>>>>>>>>>>>>>>>>

//                                                                      Question No 01

// var arr=[[],[],[]]

// console.log(arr)

//                                                                      Question No 02

// var arr = [[0, 1, 2, 3],[1, 0, 1, 2],[2, 1, 0, 1],
// ];

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//                                                                      Question No 03

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//                                                                      Question No 04

// var table = +prompt("Enter a number to show its multiplication table");
// var tableLenght = +prompt("Enter a length multiplication table");

// document.write(
//   "Multipalication table of " + table + " lenght " + tableLenght + "<br/>"
// );

// for (var i = 1; i <= tableLenght; i++) {
//   var multi = i * table;

//   console.log(table + " x " + i + " = " + multi);
//   document.write(table + " x " + i + " = " + multi + "<br/>");
// }

//                                                                      Question No 05

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// var count = [0];
// for (var i = 0; i < fruits.length; i++) {
//   console.log("Element at index " + count++ + " is " + fruits[i]);
// }

//                                                                      Question No 06

// A==> Counting

// for (var i = 1; i <=15; i++) {
//   console.log(i);
// }

// B==> Reverse Counting

// for (var i = 10; i > 0; i--) {
//   console.log(i);
// }

// C==> Even Number

// for (var i = 1; i <=20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// C==> Odd Number

// for (var i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// C==> Series

// for (var i = 1; i <= 20; i++) {
//   i++;
//   console.log(i + "k");
// }

//                                                                      Question No 07

// var user = prompt("Welcome To Chaman Bakery! What do you want to order");
// var item = ["cake", "apple pie", "coockie", "chips", "patties"];
// var flag = true;

// for (var i = 0; i < item.length; i++) {
//   if (user == item[i]) {
//     console.log(user + " is availabe at index " + [i] + " in our bakery");
//     flag = false;
//     break;
//   }
// }
// if (flag) {
//   console.log("We are sorry " + user + " is not availbe in our bakery");
// }

//                                                                      Question No 08

// var num = [24, 53, 78, 91, 12];
// var large = num[0];

// for (var i = 0; i < num.length; i++) {
//   if (num[i] > large) {
//     large = num[i];
//   }
// }

// document.write("Array item " + num);
// document.write("<br/>The largest num is " + large);

//                                                                      Question No 09

// var num = [24, 53, 78, 91, 12];
// var small = num[0];

// for (var i = 0; i < num.length; i++) {
//   if (num[i] < small) {
//     small = num[i];
//   }
// }

// document.write("Array item " + num);
// document.write("<br/>The smallest num is " + small);

//                                                                      Question No 10

// var num = 5;

// for (var i = 1; i <20; i++) {
//   var multi = i * num;
//   console.log(multi);
// }