var submitBtn = document.getElementById("submit");
var form = document.getElementsByTagName("form")[0];
var btn = document.getElementById('btn');

function getVals(e){
  e.preventDefault();
  var valArr = [];
  for(var i = 0;i < form.elements.length; i++){
    valArr.push(form.elements[i]);
    console.log(form.elements[i].value);
  }
  valArr.pop();
  console.log(valArr);
}

// submitBtn.onclick = getVals;

var list = document.getElementsByTagName('li');
for(var i=0;i<list.length;i++){
  list[i].addEventListener('click', function(e){
    console.log(e);
    console.log(e.currentTarget.textContent);
    console.log(this);
  });
}

function logName(name){
  console.log(name);
}

var foo = function(){
  console.log(arguments[0]);
}("corey");

var inputEl = document.createElement('input');
inputEl.id = 'newId';
inputEl.name = 'newName'
inputEl.type = 'email'
inputEl.placeholder = 'email.email.com'
// form.appendChild(inputEl);

console.log(inputEl);
var inputNum = 0;

function appendEl(){
  inputNum++;
  console.log(inputNum);
  var inputX = document.createElement('input');
}

btn.onclick = appendEl;
