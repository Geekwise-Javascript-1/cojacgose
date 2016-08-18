// date math object string

// var str = '     Corey    ';
// var newStr = str.trim();
// console.log(newStr);
// console.log(str);
//
// var blankStr = "         ";
// console.log(blankStr.trim());

// var randNum = Math.floor((Math.round(Math.random() * 10))+1);
// console.log(randNum);

// var toDay = new Date;
// console.log(toDay.getMonth());
// console.log(toDay.getDate());
// console.log(toDay.getFullYear());

// var nameFirst = "Corey"
//
// function newFunction(){
//   var lastName = "Gose"
//   alert(nameFirst + lastName);
// }
//
// newFunction();
// alert(lastName);

var nameFirst = prompt("What's your first name?");
var nameLast = prompt("What's your last name?");
var nameColor = prompt('What color is your name?');
var nameBday = prompt("When is your B-Day?");

function nameAndColor(uF, uL, uC, uB){
  console.log(uB)
  uB = uB.split(' ');
  console.log(uB)
  // alert("Hello " + uF + " " + uL + ". I see your favorite color is " + uC + ".");
}

nameAndColor(nameFirst,nameLast,nameColor, nameBday);
