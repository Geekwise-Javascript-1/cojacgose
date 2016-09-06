var btn = document.querySelector('button');
var googlebtn = document.getElementById('gbtn');
var header = document.querySelector('header');

//Add and remove an event listener
// btn.addEventListener('click', once);
//
// function once(){
//   console.log('done!');
//   btn.removeEventListener('click', once); // remove must be added exactly the same as the existing function
// };
//DETECT MOUSE CLICKS BY BUTTON
// btn.addEventListener('mousedown', function(e){
//   if(e.which == 1){
//     console.log('left click');
//   }else if(e.which == 2){
//     console.log('middle click');
//   }else if(e.which == 3){
//     console.log('right click');
//   }
// });
//PREVENT ANCHOR FROM LINKING - stops its default function
// googlebtn.addEventListener('click', function(e){
//   e.preventDefault();
//   console.log('no google!');
// });

// addEventListener('keydown', function(e){
//   console.log(e);
//   if(e.keyCode == 86){
//     document.body.style.backgroundColor = 'violet';
//   }
// });
//
// addEventListener('keyup',function(e){
//   if(e.keyCode == 86){
//     document.body.style.backgroundColor = '';
//   }
// });

// addEventListener('keypress', function(e){
//   if(e.charCode == 118){
//     document.body.style.backgroundColor = 'violet';
//   }
// });

// console.log('1'.charCodeAt(0));

// addEventListener('mousemove', function(e){
//   // console.log(e.screenY+'px');
// });

// addEventListener('click',function(e){
//   var dot = document.createElement('div');
//   dot.className = "dot";
//   dot.style.left = e.pageX + 'px';
//   dot.style.top = e.pageY + 'px';
//   document.body.appendChild(dot);
// });

addEventListener('scroll',function(e){
  if(e.pageY >= 65){
    header.classList.add('fixed');
    document.body.style.paddingTop = '65px';
  }else{
    header.classList.remove('fixed');
    document.body.style.paddingTop = '65px';
  }
});
