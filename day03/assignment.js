var inputName = prompt("Input your name in lowercase.");

function capFirst(name){
  name = name.charAt(0).toUpperCase()  + name.slice(1);
  return name;
}
alert(capFirst(inputName));
