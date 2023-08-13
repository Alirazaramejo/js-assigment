//question 1
  var number = parseFloat(prompt("Enter a number:"));
        var result = ((number + 5) * 10) / 2;
        document.write("Result: " + result);

        //question 2
        var a = 2, b = 1;
var result = --a - --b + ++b + b--;
// --a; (Decrement a by 1, a becomes 1)
// --a - --b; (Decrement a by 1, decrement b by 1, a=0, b=0; Result: 0 - 0 = 0)
// --a - --b + ++b; (Decrement a by 1, decrement b by 1, increment b by 1, a=0, b=1; Result: 0 - 1 + 1 = 0)
// --a - --b + ++b + b--; (Decrement a by 1, decrement b by 1, increment b by 1, post-decrement b by 1, a=-1, b=0; Result: -1 - 0 + 1 + 1 = 1)

//question 3
var userName = prompt("Enter your name:");
alert("Hello, " + userName + "! Welcome to our website.");

//question 4
var number = parseInt(prompt("Enter a number for multiplication table (default is 5):")) || 5;
        
document.write("<h2>Multiplication Table of " + number + "</h2>");
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}


//question 5
 // Prompt the user for a number
 var number = parseInt(prompt("Enter a number for multiplication table (default is 5):")) || 5;
        
 // Display the multiplication table
 document.write("<h2>Multiplication Table of " + number + "</h2>");
 document.write("<table border='1'>");
 document.write("<tr><th>Multiplier</th><th>Result</th></tr>");
 
 for (var i = 1; i <= 10; i++) {
     var result = number * i;
     document.write("<tr><td>" + number + " x " + i + "</td><td>" + result + "</td></tr>");
 }
 
 document.write("</table>");
//question 6

  // Step a: Take three subjects' names from the user and store them in variables
  var subject1 = prompt("Enter name of Subject 1:");
  var subject2 = prompt("Enter name of Subject 2:");
  var subject3 = prompt("Enter name of Subject 3:");
  
  // Step b: Total marks for each subject
  var totalMarks = 100;
  
  // Step c: Take obtained marks for the first subject from the user and store it in a variable
  var obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
  
  // Step d: Take obtained marks for the remaining 2 subjects from the user and store them in variables
  var obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
  var obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));
  
  // Step e: Calculate total marks and percentage
  var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
  var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

  // Display the result in a table format
  document.write("<h2>Result:</h2>");
  document.write("<table border='1'>");
  document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
  document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
  document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
  document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
  document.write("</table>");
  document.write("<p>Total Obtained Marks: " + totalObtainedMarks + "</p>");
  document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");

