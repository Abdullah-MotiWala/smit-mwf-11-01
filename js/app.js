// Premitive Datatypes
var rizwan = `How're you!`; //string
var salary = 25; //number
var isRizwanMan = true; //boolean
var wifes = null; //null
var abc = undefined; //undefined

// var ahmed = "Insaan"
// console.log(ahmed)

// var var = "abc" | Reserved keywords not allowed
// var is Rizwan = "anc" | Space not allowed
// var 1alpha = 25 | Starting from number not allowed
// var a1lpha1 = 25 | Allowed
// var %alpha | Spcial character and mathematics sign not allowed
// var $alpha_ = 25 | $ and _ only allowed

var saylani_location = '"snake_case"';
var saylaniLocation = "camelCase";
var SaylaniLocation = "PascalCase";
var SAYLANI_LOCATION = "SCREAMING_SNAKE_CASE";

// alert(saylani_location);

// var a = "abc"
// var a; //initialization | declaration
// a = "abc" //assignment

// var a = "abc";
// console.log(a)
// a = "def";
// console.log(a,"2")

// var a = 25;
// a = a + 25;
// console.log(a + 25);
// console.log(a);

// var a = 25
// var b = 6

// var remainder = a / b
// console.log(remainder)

// B O D M A S
// var a = 25+5-(8*5)/4+6

var a = 5;
var b = a++ + a++ + ++a + a++ + ++a;
console.log(b);
// b = 5 + 6 + 8 + 8 + 10

// a = a + 1
// a += 2
// a++
// ++a
// a--

// console.log(a++, a);
// console.log(++a)
// console.log(++a)
// console.log(a)

// var a = "Hi";
// var userName = prompt("Enter your name");
// var greeting = "How're you?";

// // concatenation
// var firstMessage = a + " " + userName + " " + greeting;
// alert(firstMessage);

// var birthYear = prompt("Enter your birth year");
// var currentYear = 2026;

// var userAge = currentYear - birthYear;
// var message = "Your age is " + userAge + " years";
// alert(message);

// var isInstituteOpen = true;
// if (isInstituteOpen) {
//   console.log("attending class...");
// }

// var isMedicalStoreOpen = false;
// var isShopOpen = true;
// if (isMedicalStoreOpen) {
//   console.log("2 Flagyl dedo");
// } else {
//   console.log("Fruit dedo");
// }

// if (isMedicalStoreOpen) {
//   console.log("2 Flagyl dedo");
// } else if (isShopOpen) {
//   console.log("Fruit dedo");
// } else {
//   console.log("Phakki dedo");
// }

// var pepsiFollowing = 50000
// var cokeFollowing = 50000

// var isSameFollowing = pepsiFollowing === cokeFollowing
// console.log(isSameFollowing)

// var pepsiFollowing = 50000
// var cokeFollowing = 60000

// var isSameFollowing = pepsiFollowing !== cokeFollowing
// console.log(isSameFollowing)

// var position1 = "sticky"
// var position2 = "sticky"

// var isSamePosition = position1 === position2
// console.log(isSamePosition)

// var isBabarSenior = true;
// var isViratSenior = true;

// var isBothGOAT = isBabarSenior != isViratSenior;
// console.log(isBothGOAT);

// var isClassOn = true;
// if (isClassOn) {
//   console.log("attendence");
// } else {
//   console.log("Aish karo");
// }

// var currentWeight = prompt("Enter Your Current Weight");
// var targettedWeight = prompt("Enter Your Target Weight");

// if (currentWeight > targettedWeight) {
//   console.log("do the hardwork");
// } else {
//   console.log("Hurrrayyy! You acheived the target");
// }

// Less than OR Equals to
// if (currentWeight <= targettedWeight) {
//   console.log("Hurrrayyy! You acheived the target");
// } else {
//   console.log("Do the hardwork");
// }

// mutate

// var totalWickets = 10;
// var wicketFall = prompt("Enter the wicket fall");
// var wicketFallInNum = Number(wicketFall);
// var wicketFallInNum = parseInt(wicketFall);
// var wicketFallInNum = parseFloat(wicketFall);
// var wicketFallInNum = +wicketFall;
// console.log(wicketFallInNum, "===wicket fall");
// console.log("Total Wickets", typeof totalWickets);
// console.log(
//   "Wicket Fall In Num : ",
//   typeof wicketFallInNum,
//   "Wicket Faill: ",
//   typeof wicketFall,
// );

// var result = totalWickets + wicketFall;
// console.log(result);

// if (wicketFall === totalWickets) {
//   console.log("All Out");
// } else {
//   console.log("Babar still playing");
// }

// var one = 1;
// var secondOne = "1";

// console.log(one + secondOne);
// var greeting = "Hi "
// var message = "How are you"
// var greetingMessage = greeting + message
// console.log(greetingMessage)
// var allwicket=10;
// var wicketout=+prompt("suggest wicket out")
// var wicketnum=parseFloat(wicketout)
// console.log(wicketout)

// var a = "abc";
// var b = "cde";

// var result = a - b;
// console.log(typeof result)

// var a = "1"
// var b = "2"

// var result = a - b
// console.log(result)

// var result = 1 + 1 + 8 - "1" + 9 + "0";
// console.log(result)

// var isLight = true;
// var isInternet = false;
// if (isLight === true && isInternet === true) {
//   console.log("On the PC");
// }

// var isPC = false;
// var isLaptop = false;
// var isMobile = false;
// if (isPC === true || isLaptop === true || isMobile === true) {
//   console.log("Open The Website");
// }

// var isGender = "female";
// var isRich = false;
// var isCaring = true;
// var isBeautiful = false;

// if (
//   isGender === "female" &&
//   (isRich === true || isCaring === true || isBeautiful === true)
// ) {
//   console.log("Shadi krlo");
// } else {
// }

var newStudent = "Ahmed";

// var students = ["String", 1250, true, undefined, null, []];
var students = [
  "Rizwan",
  "Habib",
  "Dawar",
  newStudent,
  "Waqas",
  "Shayan",
  "Hasnain",
];
// var student = students[-1];

// var newAdmission = prompt("Enter new student name");
// var size = students.push(newAdmission);
// // console.log(size,students.length)

// var b = students.pop();
// var c = students.pop();
// console.log(students, b, c);

// // var a = console.log(students, "===student");
// var a = prompt("enter your name")
// console.log(a)

// students.shift();
// students.unshift("Tayyab");
// console.log(students);

// var a = students.splice(2,0, "ali", "mohsin");
// console.log(students, a);

// var slicedArray = students.slice(0);
// console.log(students, slicedArray);

// var newStudents = students;
// students.push("abc")
// console.log(newStudents, students);

// var splicedStudents = students.toSpliced(2, 2, "Ahsan");
// // console.log(students, splicedStudents);

// var students2 = students
// students2.pop()
// // console.log(students2,students)
// console.log(students, "===before");
// // var spliceReturn = students.splice(2, 2, "Ahsan");

// var spliceReturn = students.toSpliced(2, 2, "Ahsan");
// console.log(students, spliceReturn,  "===after");

// var students2 = JSON.stringify(students);
// students2 = JSON.parse(students2)

// students3.push("Ali");
// console.log(students, students2);
// var tableNumber = prompt("Enter a number");
// for (var i = 1; i <= 10; i++) {
//   console.log(tableNumber + " X " + i + " = " + i*tableNumber);
//   // console.log("2 X i = 2")
//   // console.log("2 X " + i + " = " + 2 * i);
// }

// for (var i = 10; i <= 10; i++) {
//   console.log(i);
// }

var names = [
  "dawar",
  "rizwan",
  "ali",
  "jabbar",
  "azanuddin",
  "hadi",
  "hannan",
  "azan",
];
console.log(names.length);

// var i = 2
// var user = names[i];
// console.log(user, "===user");
// const isAzanAt1 = names[0] === "azan"

// const isAzanAt2 = names[1] === "azan"

// Loopus interruptus

// var azanFound = false;
// for (var i = 0; i < names.length; i++) {
//   var item = names[i];

//   if (item === "azan") {
//     azanFound = true;
//     break;
//   }
//   // if (item === "rizwan") {
//   //   continue;
//   // }
//   console.log(i, azanFound, "===running");
// }

// console.log(azanFound, "===azanFound");

// var a = 1;
// var a = "abc";

// console.log(a)

// const a2 = 1;
// a2 = "abc";

// let a1 = 1;
// a1 = "abc";
// console.log(a1);
// const a = "abc";

// var b = 5;
// b = 6;

// const email = "hassan@smit.com";
// const username = "ali";

// const userEmail = prompt("Enter your email");
// const userEmailInLowercase = userEmail.toLowerCase();
// const userEmailInUppercase = userEmail.toUpperCase();
// console.log(userEmail, userEmailInLowercase, userEmailInUppercase);
// if (email === userEmailInLowercase) {
//   alert("Your username is " + username);
// } else {
//   alert("Invalid credentials");
// }

// const country = "Pakistan";
// const shortForm = country.slice(0, 3);
// console.log(country, country.length, country[1], shortForm);

// const value = prompt("Enter your value");
// const firstLetter = value[0];
// const otherThanFirstLetter = value.slice(1);

// const upperCaseLetter = firstLetter.toUpperCase();
// const lowerCaseLetters = otherThanFirstLetter.toLowerCase();

// const newValue = upperCaseLetter + lowerCaseLetters;
// console.log(newValue);

// let newValue = "";
// for (let i = 0; i < value.length; i++) {
//   const item = value[i];
//   if (item === "a" || item === "A") {
//     newValue = newValue + item.toUpperCase();
//     continue;
//   }
//   newValue = newValue + item;
// }

// console.log(newValue);

// const text =
//   " the quick queen queue     brown fox jumps over a      courage cowardly dog over       ";

// const word = "over";
// let indexNumber = -1;

// for (let i = 0; i < text.length; i++) {
//   const currentWord = text.slice(i, i + word.length);
//   if(currentWord === word){
//     indexNumber = i
//     break;
//   }
// }
// console.log(indexNumber)

// let totalWords = 0;

// for (let i = 0; i < text.length; i++) {
//   const letter = text[i];
//   const nextLetter = text[i + 1];

//   if (letter === " " && nextLetter !== " " && i > 0 && i < text.length - 1) totalWords++;
// }

// totalWords++;

// console.log(totalWords);

// const totalWordsArray = text.split(" ");
// console.log(totalWordsArray)
// let totalWords = 0;
// for (let i = 0; i < totalWordsArray.length; i++) {
//   if (totalWordsArray[i] !== "") totalWords++;
// }
// console.log(totalWords);

// const text = "Huzaia is a good tiktoker";
// const newHuzaifa = text.replace("tiktoker", "trans");

// console.log(text,newHuzaifa)

// const text = "Huzaifa is a good boy, and he deserves to be boy";
// const newHuzaifa = text.replaceAll("boy", "trans");

// console.log(newHuzaifa)

// const biscuit = 50.5
// const roundedValue = Math.round(biscuit)
// console.log(biscuit,roundedValue)

// const customerBill = 19.00000000001;
// const newBill = Math.ceil(customerBill)
// console.log(newBill)

// const customerReturn = 19.5
// const newReturn = Math.floor(customerReturn)
// console.log(newReturn)

// const randomNumber = Math.random();
// console.log(randomNumber,"====randomNumber")

const target = 45;
let userScore = 0;

while (userScore < target) {
  const userOutput = +prompt("Enter your number");
  userScore += userOutput;
  const randomNumber = Math.random();
  const computerOutput = Math.ceil(randomNumber * 6);

  if (userScore >= target) {
    alert("You won, but I'll comeback like Ra-One");
    break;
  }

  if (computerOutput === userOutput) {
    alert("Hahahaha! You've lost by dumb machine");
    break;
  }

  alert("Your score is " + userScore);
  alert("Computer throw the " + computerOutput);
}
