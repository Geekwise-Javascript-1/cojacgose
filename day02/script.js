// // var constant = 10;
// // userResp = parseInt(userResp);
// var userResp = prompt('Choose a number');
// userResp = parseInt(userResp);
//
//
// if (isNaN(userResp)) {
//   console.log('not a number')
//   alert('was that a number?')
// } else {
//   alert('your number is '+userResp)
// }

var age = prompt("How old are ya?");
var gender = prompt("Are you m or f?");

if (age <= 21) {
  alert('Get outta here!');
} else if(gender == 'm' || gender == 'male') {
  alert('Hey duder, getta beer');
} else if(gender == 'f' || gender == 'female') {
  alert('Hey lady, getta beer');
} else {
  alert("So your not a man and not a woman, you're " + gender + ". Well, have a beer");
}
