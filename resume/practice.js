//tweet prompt//

alert(prompt("Compose Your Tweet").slice(0, 140));


// first name capitalizer //
var name = prompt("What is your name?");

var firstChar = name.slice(0, 1);

var upperCaseFirstChar = firstChar.toUpperCase();

var restOfName = name.slice(1, name.length);

var capitalisedName = upperCaseFirstChar + restOfName.toLowerCase();

alert("Hello, " + capitalisedName);

// dog age calculator//

var dogAge = prompt("How Old is the Hound");
var humanAge = (dogAge - 2) * 4 + 21;
alert("Your doge is " + humanAge + " in Human Years");


//milk robot//

function getMilk(money, costPerBottle) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  console.log("Buy " + calcBottles(money, costPerBottle) + " bottles of milk.");

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  return calcChange(money, costPerBottle);

}

function calcBottles(startingMoney, costPerBottle) {

  var numberOfBottles = Math.floor(startingMoney / costPerBottle);

  return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
  var change = startingAmount % costPerBottle;
  return change;
}


console.log("Hello, here is your " + getMilk(5, 1.5) + " change.");


//90 yr death calculator- wrong answer- using vatiables and alerts//

var years = prompt("How Old Are You?");

var days = 32850 - (years * 365);
var weeks = 4680 - (years * 52);
var months = 1080 - (years * 12);

alert("You have " + days + " days, " + weeks + " weeks and " + months + " months left.");


//90 yr death calculator- correct answer- using functions and console logs//

function lifeInWeeks(age) {

  var yearsRemaining = 90 - age;
  var days = yearsRemaining * 365;
  var weeks = yearsRemaining * 52;
  var months = yearsRemaining * 12;

  console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");

  // BMI calculator//

  function bmiCalculator(weight, height) {

    var bmi = weight / (height * height);
    return Math.round(bmi);
  }


  // Random Number Generation

  var n = Math.random();
  Math.floor(n * 6) + 1

  // love iCalculator

  var name = prompt("What is Your Name?");
  var crushName = prompt("What is Your Crush's Name?");
  var score = Math.random() * 100;
  score = Math.floor(score) + 1


  if (score > 70) {
    alert(name + " and " + crushName + " are " + score + "% Compatible. You Love Each Other Like Kim and Kanye.");
  }
  if (score > 30 && score <= 70) {
    alert(name + " and " + crushName + " are " + score + "% Compatible.");
  }
  if (score <= 30) {
    alert(name + " and " + crushName + " are " + score + "% Compatible. You Love Each Other Like Oil and Water.");
  }


  // BMI calculator ADVANCED

  // <18.5 "Your BMI is " + bmi + " so you are underweight."

  // 18.5-24.9 "Your BMI is " + bmi + "so have a normal weight"

  // >24.9 "Your BMI is " + bmi + "so you are overweight"



  function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    if (bmi <= 18.5) {
      return ("Your BMI is " + bmi + ", so you are underweight.");
    }
    if (bmi > 18.5 && bmi <= 24.9) {
      return ("Your BMI is " + bmi + ", so you have a normal weight.");
    }
    if (bmi > 24.9) {
      return ("Your BMI is " + bmi + ", so you are overweight.");
    }
  }


  // leap year calcChange

  //   var age = 26;
  // var beverage = (age >= 21) ? "Beer" : "Juice";
  // console.log(beverage); // "Beer"
  // year = (year / 4 = true) ? "Yes" : "No";

  // function isLeap(year) {
  // if (year / 4 = true than = yes else no ;
  //
  // if (year / 100 = );
  // if (year / 400 = );

  function isLeap(year) {

    if (year % 4 === 0) {
      if (year % 100 === 0) {
          if (year % 400 === 0){
              return "Leap Year.";
          } else {
              return "Not leap year.";
          }
      } else {
          return "Leap Year.";
        }
    } else {
        return "Not leap Year";
    }

  }

  isLeap(2001)



  "Angela"
"Jack"
"Pam"
"James"
"Lara"
"Jason"

var guestlist = [ "Angela", "Jack", "Pam", "James", "Lara", "Jason"];
var guestName = prompt( "What is your name?");



if (guestlist.includes(guestName)) {
    return  "Welcome";
} else {
    return "Maybe Next Time";
}

}

console.log(guestlist[0]);
