// var fruitColors = [];
// var cherry = ['cherry', 'red']
// var banana = ['banana', 'yellow']
// var blueberry = ['blueberry', 'blue']
// var fruits = ['apple', 'cherry', 'banana', 'orange'];
// fruits.push('blueberry');
// fruitColors.push(cherry, banana, blueberry);
//
// // console.log(fruitColors)
// // console.log(fruitColors[0][1]);
// // console.log(fruitColors[1][1]);
// // console.log(fruitColors[2][1]);
//
// var lastFruit = fruitColors.pop(); //Remove element from the end of the array
// var firstFruit = fruitColors.shift(); //Remove element from the beginning of the array
// // console.log(lastFruit);
// // console.log(fruitColors);
//
// var slicedFruit = fruits.slice(1,3); //Removes elements from the middle, does not include second argument
// console.log(slicedFruit);
//array.splie(x,1) - takes out x

var fruits = [];

function getFruit(){
  var fruit = prompt('enter a fruit');
  fruits.push(fruit);
  moreFruit();
}

function moreFruit(){
  var addMore = confirm('add more?');
  if (addMore){
    getFruit();
  }else{
    alert("Your fruits are: " + fruits);
    takeOut();
  }
}

function takeOut(){
  var x = parseInt(prompt('Which fruit would you like to remove?'));
  fruits.splice(x,1);
  fruits.sort();
  outputFruits(fruits);
}

// function outputFruits(array){
//   for(var i = 0, len = array.length; i < len; i++){
//     console.log(array[i]);
//   }
// }

// function outputFruits(array){
//   var i = 0;
//   while(i<array.length){
//     console.log(array[i]);
//     i++;
//   }
// }

function outputFruits(array){
  var i=0;
  do {
    console.log(array[i]);
    i++;
  }while (i<array.length);
}
// getFruit();


// for(var i = 1; i<=10; i++){
//   if(i ===5 || i ===7){ //this skips 5 and 7
//     continue;
//   }
//   console.log(i);
// }

// for(var i = 1; i<=10; i++){
//   if(i !=5 || i !=7){
//     console.log(i);
//   }
// } this doesn't work

for(var i = 1; i<=10;i++){
  if (i===6){
    break; //ends the loop
  }
  console.log(i);
}
