var car = { //very simple object
  model: 'Jetta',
  make:'VW',
  year:'2004',
};
//Object literal - singular, unique object
var person = new Object();
person.name = 'Corey';
person.age = '28';
person.job = 'dispatcher';
person.sayName = function(){ //a method - function inside object
  alert(this.name); //user this to refer to the current object
};

// var person2 = { //same as above - just different format
//   name:'Corey',
//   age:28,
//   job:'dispatcher',
//   sayName:function(){};
// }
//
// person.sayName();


// function createPerson(name, age, job){
//   var p = new Object();
//   p.name = 'Corey';
//   p.age = '28';
//   p.job = 'dispatcher';
//   p.sayName = function(){
//     alert(this.name);
// };
//
// var person1 = createPerson('Corey',28,'dispatcher');
// var person2 = createPerson('Johnny',23,'pyromancer');
//
// person1.sayName();

function Person(name, age, job){ //no need to declare an object (capitalizing does that)
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function(){
    alert(this.name);
  };
};


var loginNum = 0;
function Login(user){
  this.user = user;
  this.build =build;
};

function Login(user){
  loginNum++;
  this.user = user;
  this.build = function(){
    var login = document.getElementById('login');
    var h2 = document.createElement('h2'),
        form = document.createElement('form'),
        label = document.createElement('label'),
        input = document.createElement('input'),
        submit = document.createElement('input');

    h2.textContent = 'Welcome, ' +this.user+ ' to your login page';
    label.setAttribute('for', 'user'+loginNum);
    label.textContent = 'Username:';
    input.type = 'text';
    input.id = 'user' +loginNum;
    input.placeholder = 'username';
    submit.type = 'submit';
    submit.value = 'submit';

    login.appendChild(h2);
    label.appendChild(input);
    form.appendChild(label);
    form.appendChild(submit);
    login.appendChild(form);
  };
}

var login1 = new Login('Corey');
login1.build();
