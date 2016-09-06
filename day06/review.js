var input1= document.getElementById('input1');
var inputs = document.getElementsByClassName('input');
var btn = document.getElementById('btn');
var inputsTag = document.getElementsByTagName('input');
var btnEl = document.querySelector('button[type="button"]');
var btnEls = document.querySelector('label input');

function getInputs(){
  for(var i = 0;i<inputs.length;i++){
    console.log(inputs[i].value);
  }
}

btn.onclick = getInputs;
console.log(btnEls);
