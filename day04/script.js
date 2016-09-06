// function hello (){
//   var msg = "hello";
//   world(msg);
// }
//
// function world (message){
//   alert(message+'world');
// }
//
// hello()

function getUsername(){
  var user = prompt('What is your username?');
  user = checkUsername(user);

}

function craftMsg(x){
  var msg = 'Welcome ';
  msg += capUser(x);
  msg += ' to my site';
  alertUser(msg);
}

function alertUser(m){
  alert(m);
}

function capUser(uN){
  return uN.charAt(0).toUpperCase() + uN.toLowerCase().slice(1);
}

function checkUsername(uC){
  if (!isNaN(parseInt(uC)) || uC==null || uC =='' || uC.trim() == ''){
    alert("That's not a proper user name");
    return;
  } else
  craftMsg(uC.trim());
}

getUsername()
