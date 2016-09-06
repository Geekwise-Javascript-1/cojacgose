// var btn = document.getElementById('btn'); //pulls id 'btn' from the document
//
// function btnClick(){ //creates a function that just alerts
//   alert('user clicked on the button');
// };
//
// btn.onclick = btnClick; //runs function btnClick onclick of element btn

//create js object for input1, input2, btn, div
//after user inputs values for input1 and input2
//user clicks go
//input1 value replaced with text "hello javascript!"
//alert new value of input1
//replaced div text with value of input2

var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var btn = document.getElementById('btn');
var txtbox = document.getElementById('txtbox');

function btnGo (){
  input1.value = "Hello Javascript!";
  alert(input1.value);
  txtbox.textContent = '<strong>' + input2.value + '</strong>';
}

btn.onclick = btnGo;
