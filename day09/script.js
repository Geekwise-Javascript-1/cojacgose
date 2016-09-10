var loginEl = document.getElementById('login');

function createLoginForm(repeat){
  var user = ""
  if(repeat){
    user = localStorage.getItem('user');
  }
  var loginForm =
  "<form>" +
    "<label for='user'>Username:" +
      "<input type='text' id='user' value" + user + ">" +
    "</label>" +
    "<label for='pass'>Password:" +
      "<input type='password' id='pass'>" +
    "</label>" +
    "<input type='submit' value='submit'>" +
  "</form>";
  loginEl.innerHTML = loginForm;

  return
}



function setStorage(e){
  e.preventDefault();
  localStorage.setItem('user',form.elements.user.value);
  localStorage.setItem('password', MD5(form.elements.pass.value)); //passes through MD5 encryption
  // storageArr = [];
  // for(i=0;i<form.elements.length-1;i++){ //the -1 keeps it from grabbing the submit btn which is included
  //   storageArr.push(form.elements[i].value);
  // }
  // localStorage.setItem('creds', storageArr);
};

function checkStorage(e){
  e.preventDefault(e);
  if(MD5(form.elements.pass.value) === localStorage.getItem('password')){
    alert('access granted');
  }else{
    alert('check password');
  };
};

if(!localStorage.getItem('user') && !localStorage.getItem('password')){
  createLoginForm(false);
  alert("Enter a new username and password");

  var form = document.querySelector('form');
  var submitBtn = document.querySelector('input[type="submit"]');
  submitBtn.addEventListener('click', setStorage);

}else if(localStorage.getItem('user') && localStorage.getItem('password')){
  createLoginForm(true);
  alert('Hello ' +localStorage.getItem('user') + ' please enter password to continue.')

  var form = document.querySelector('form');
  var submitBtn = document.querySelector('input[type="submit"]');
  submitBtn.addEventListener('click', checkStorage);
};
