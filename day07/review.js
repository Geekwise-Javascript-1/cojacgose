var theForm = document.getElementsByTagName('form')[0]; //ensures only get first form
var submit = document.querySelector('input[type="submit"]'); // you can comma seperate var lists
var addField = document.getElementsByTagName('button')[0];
var incNum = 0;

addField.addEventListener('click', createField ); //first argument is the event listened for, the second function when that event happens
function createField(){
  var newLabel = document.createElement('label');
  newLabel.setAttribute("for", "generic"+incNum); //two args, what attribute, and the value
  newLabel.innerHTML = "Generic Label";
  // newLabel.textContent - this works as well
  var newInput = document.createElement('input');
  newInput.id = "generic"+incNum;
  newInput.name = "generic";
  newInput.type = "text";
  newInput.placeholder = "Generic Input";
  addToForm(newLabel, newInput);
  incNum++;
};

function addToForm(newLabel, newInput){
  newLabel.appendChild(newInput);
  //theForm.appendChild(newLabel);
  theForm.insertBefore(newLabel,submit); //2 args - what you are inserting, where are you submitting before)
};

function getInputVals(e){
  e.preventDefault();
  var inputs = [];
  for(var i = 0; i<theForm.elements.length-1;i++){
    inputs.push(theForm.elements[i].value);
  }
  console.log(inputs);
};

submit.addEventListener('click',getInputVals);
