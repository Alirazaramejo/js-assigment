        //chapter 9 to 11
             //question 1
          // Prompt the user for their gender
          var gender = prompt("Enter your gender (male or female):").toLowerCase();

          // Display a greeting message based on gender
          if (gender === "male") {
              document.write("<h2>Message:</h2>");
              document.write("<p>Good Morning Sir.</p>");
          } else if (gender === "female") {
              document.write("<h2>Message:</h2>");
              document.write("<p>Good Morning Ma’am.</p>");
          } else {
              document.write("<h2>Invalid Input:</h2>");
              document.write("<p>Please enter a valid gender: male or female.</p>");
          }
        //question 2
          // Prompt the user for the color of the traffic signal
          var color = prompt("Enter the color of the traffic signal (red, yellow, or green):").toLowerCase();

          // Display message based on the color of the traffic signal
          if (color === "red") {
              document.write("<h2>Message:</h2>");
              document.write("<p>STOP! Do not proceed.</p>");
          } else if (color === "yellow") {
              document.write("<h2>Message:</h2>");
              document.write("<p>Prepare to STOP or proceed with caution.</p>");
          } else if (color === "green") {
              document.write("<h2>Message:</h2>");
              document.write("<p>GO! You can proceed.</p>");
          } else {
              document.write("<h2>Invalid Input:</h2>");
              document.write("<p>Please enter a valid color: red, yellow, or green.</p>");
          }
        //question 3
         // Prompt the user for the color of the traffic signal
         var color = prompt("Enter the color of the traffic signal (red, yellow, or green):").toLowerCase();

         // Display message based on the color of the traffic signal
         if (color === "red") {
             document.write("<h2>Message:</h2>");
             document.write("<p>STOP! Do not proceed.</p>");
         } else if (color === "yellow") {
             document.write("<h2>Message:</h2>");
             document.write("<p>Prepare to STOP or proceed with caution.</p>");
         } else if (color === "green") {
             document.write("<h2>Message:</h2>");
             document.write("<p>GO! You can proceed.</p>");
         } else {
             document.write("<h2>Invalid Input:</h2>");
             document.write("<p>Please enter a valid color: red, yellow, or green.</p>");
         }
        //question 4

          // Prompt the user for remaining fuel in the car
          var remainingFuel = parseFloat(prompt("Enter remaining fuel in your car (in litres):"));

          // Check if fuel level is less than 0.25 liters and display appropriate message
          if (remainingFuel < 0.25) {
              alert("Please refill the fuel in your car.");
          } else {
              alert("Your car has sufficient fuel.");
          }
//question 5

     // Prompt the user for marks obtained in three subjects and total marks
     var obtainedMarks1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
     var obtainedMarks2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
     var obtainedMarks3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));
     var totalMarks = parseFloat(prompt("Enter total marks for each subject:"));

     // Calculate total obtained marks and percentage
     var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
     var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

     // Calculate grade and remarks based on percentage
     var grade, remarks;
     if (percentage >= 80) {
         grade = "A+";
         remarks = "Excellent";
     } else if (percentage >= 70) {
         grade = "A";
         remarks = "Very Good";
     } else if (percentage >= 60) {
         grade = "B";
         remarks = "Good";
     } else if (percentage >= 50) {
         grade = "C";
         remarks = "Average";
     } else if (percentage >= 40) {
         grade = "D";
         remarks = "Pass";
     } else {
         grade = "F";
         remarks = "Fail";
     }

     // Display the result on the web page
     document.write("<h2>Result:</h2>");
     document.write("<p>Total Marks: " + totalMarks + " each</p>");
     document.write("<p>Obtained Marks in Subject 1: " + obtainedMarks1 + "</p>");
     document.write("<p>Obtained Marks in Subject 2: " + obtainedMarks2 + "</p>");
     document.write("<p>Obtained Marks in Subject 3: " + obtainedMarks3 + "</p>");
     document.write("<p>Total Obtained Marks: " + totalObtainedMarks + "</p>");
     document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
     document.write("<p>Grade: " + grade + "</p>");
     document.write("<p>Remarks: " + remarks + "</p>");

        // ===========Question No:1============

        var num = +prompt("Question NO: 1 \nEnter any number")
        document.write("<P>"+"<h1>"+ "Question No:1"+"</h1>"+"</P>")
        document.write("<P>"+ "Results:"+"</P>")
        document.write("<P>"+ "The value of number is: "+ num +"</P>")

        document.write("<br>"+"<P>"+ "The value of ++number is: "+ ++num +"</P>")
        document.write("<P>"+ "Now the value of Number is: "+num+"</P>")
        
        document.write("<br>"+"<P>"+ "The value of number++ is: "+ num++ +"</P>")
        document.write("<P>"+ "Now the value of Number is: "+ num +"</P>")

        document.write("<br>"+"<P>"+ "The value of --number is: "+ --num +"</P>")
        document.write("<P>"+ "Now the value of Number is: "+ num +"</P>")
       
        document.write("<br>"+"<P>"+ "The value of number-- is: "+ num-- +"</P>")
        document.write("<P>"+ "Now the value of Number is: "+ num +"</P>")

        // ===========Question No:2============

        document.write("<P>"+"<h1>"+ "Question No:2"+"</h1>"+"</P>")

        var a = 2, b = 1;
        var result = --a - --b + ++b + b--;
        document.write("<P>"+"var a = 2, b = 1;"+"</P>")
        document.write("<P>"+"var result = --a - --b + ++b + b--;"+"</P>")
        document.write("<P>"+"--a ==>"+ 1+"</P>")
        document.write("<P>"+"--a - --b ==>"+ 1+"</P>")
        document.write("<P>"+"--a - --b + ++b ==>"+ 2+"</P>")
        document.write("<P>"+"--a - --b + ++b + b-- ==>"+ 3+"</P>")
        document.write("<P>"+"Results: "+ result+"</P>")
       
        // ===========Question No:3============
        
        var name = prompt("Question NO: 3 \nEnter your name")
        alert("As-salāmu ʿalaykum " + name)

        // ===========Question No:5============
        
        var tab = +prompt("Question NO: 5 \nEnter the any number it will show their Multiplication Table")
        var number = 0;
        document.write("<P>"+"<h1>"+ "Question No:4"+"</h1>"+"</P>")
        if ( tab>=1 ){
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
        }
        else {
            tab = 5;
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
        }

   //==========chapter 12 and 113===============
   //question 1
      // Prompt the user for a character (number or string)
      var input = prompt("Enter a character:");

      // Convert the first character of the input to its ASCII code
      var asciiCode = input.charCodeAt(0);

      // Check the ASCII code range to determine the character type
      if (asciiCode >= 48 && asciiCode <= 57) {
          document.write("<h2>Character Type:</h2>");
          document.write("<p>The input is a number.</p>");
      } else if (asciiCode >= 65 && asciiCode <= 90) {
          document.write("<h2>Character Type:</h2>");
          document.write("<p>The input is an uppercase letter.</p>");
      } else if (asciiCode >= 97 && asciiCode <= 122) {
          document.write("<h2>Character Type:</h2>");
          document.write("<p>The input is a lowercase letter.</p>");
      } else {
          document.write("<h2>Character Type:</h2>");
          document.write("<p>The input is not a number or letter.</p>");
      }
         //question 2
         // Prompt the user for two integers
        var num1 = parseInt(prompt("Enter the first integer:"));
        var num2 = parseInt(prompt("Enter the second integer:"));

        // Compare the two integers and display the larger one
        if (num1 > num2) {
            document.write("<h2>Larger Integer:</h2>");
            document.write("<p>" + num1 + " is larger than " + num2 + ".</p>");
        } else if (num2 > num1) {
            document.write("<h2>Larger Integer:</h2>");
            document.write("<p>" + num2 + " is larger than " + num1 + ".</p>");
        } else {
            document.write("<h2>Equal Integers:</h2>");
            document.write("<p>The two integers are equal: " + num1 + " and " + num2 + ".</p>");
        }
            //question 3
               // Prompt the user for a number
        var number = parseFloat(prompt("Enter a number:"));

        // Check and display whether the number is positive, negative, or zero
        if (number > 0) {
            document.write("<h2>Number Classification:</h2>");
            document.write("<p>The number " + number + " is positive.</p>");
        } else if (number < 0) {
            document.write("<h2>Number Classification:</h2>");
            document.write("<p>The number " + number + " is negative.</p>");
        } else {
            document.write("<h2>Number Classification:</h2>");
            document.write("<p>The number is zero.</p>");
        }
               //question 4
                // Prompt the user for a single character
        var character = prompt("Enter a character (string of length 1):");

        // Convert the character to lowercase for case-insensitive comparison
        var lowerCaseCharacter = character.toLowerCase();

        // Check and display whether the character is a vowel or not
        if (lowerCaseCharacter === 'a' || lowerCaseCharacter === 'e' || lowerCaseCharacter === 'i' || lowerCaseCharacter === 'o' || lowerCaseCharacter === 'u') {
            document.write("<h2>Vowel Checker:</h2>");
            document.write("<p>The character '" + character + "' is a vowel.</p>");
        } else {
            document.write("<h2>Vowel Checker:</h2>");
            document.write("<p>The character '" + character + "' is not a vowel.</p>");
        }
                  //question 5
                  // Store correct password in a variable
        var correctPassword = "mySecretPassword";

        // Ask the user to enter their password
        var userPassword = prompt("Enter your password:");

        // Validate the user's input
        if (userPassword === "") {
            alert("Please enter your password.");
        } else if (userPassword === correctPassword) {
            alert("Correct! The password you entered matches the original password.");
        } else {
            alert("Incorrect password.");
        }
                  //question 6
                  var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}


//question 7
 // Prompt the user for time in 24-hour clock format
 var time24 = parseInt(prompt("Enter time in 24-hour clock format (e.g., 1900):"));

 // Initialize variables for time conversion
 var time12, period;

 // Perform time conversion using if, else if, and else statements
 if (time24 >= 0 && time24 <= 2359) {
     if (time24 >= 0 && time24 < 1200) {
         period = "AM";
         if (time24 === 0) {
             time12 = 12;
         } else {
             time12 = Math.floor(time24 / 100);
         }
     } else {
         period = "PM";
         if (time24 === 1200) {
             time12 = 12;
         } else {
             time12 = Math.floor((time24 - 1200) / 100);
         }
     }

     // Display the converted time in 12-hour format
     document.write("<h2>Time Conversion:</h2>");
     document.write("<p>" + time24 + " is equivalent to " + time12 + period + ".</p>");
 } else {
     document.write("<h2>Invalid Input:</h2>");
     document.write("<p>Please enter a valid time in 24-hour clock format (0-2359).</p>");
 }