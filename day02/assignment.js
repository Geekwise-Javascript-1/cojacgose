var userAction = prompt('A wizard turns you into a whale, what do you do?');
console.log(userAction);

if (userAction == "" || userAction == null){
  alert('Hm, it must be too hard to type as a whale!');
} else {
  alert('Excellent choice! You ' + userAction);
}
