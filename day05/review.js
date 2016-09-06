function getUser(){
  var user = prompt('What is your username?');
  splitWords(user);
}

function splitWords(string){
  string = string.split(' ');
  userArr = [];
  for(var i = 0; i < string.length; i++){
    if (checkUser(string[i])){
      userArr.push(formatUser(checkUser(string[i])));
    }
  }
  outputUser(userArr);
}

function checkUser(user){
  var canParse = parseInt(user);
  if(isNaN(canParse) && user !==null && user.trim()){
    return user.trim();
  }
}

function formatUser(string){
  return string.charAt(0).toUpperCase() + string.toLowerCase().substr(1, string.length);
}

function outputUser(user){
  var msg = '';
  msg = 'Welcome ';
  for(var i = 0; i < user.legnth; i++){
    msg += user[i] + ' ';
  }
  msg +='to my new site!';
  alert(msg);
}

getUser();
