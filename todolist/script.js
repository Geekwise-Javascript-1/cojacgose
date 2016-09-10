var addButton = document.getElementById('addItem');
var list = document.getElementById('listId');
var submitButton = document.getElementById('submit');
var printedList = document.getElementById('printedList');
var oL = document.querySelector('ol');
var numOfItems = 0;



//This adds an input field with a numbered ID unto the form(listID) when called
function addItem(){
  var newInput = document.createElement('input');
  newInput.id = 'listItem' + numOfItems;
  newInput.className = 'listItem'
  newInput.placeholder = "item number " + numOfItems;
  list.appendChild(newInput);
  numOfItems++;
};
//This pushes all the values from the fields from listID into an array labeled listItems
function collectList(){
  var listItems = [];
  for(var i=0; i<list.elements.length;i++){
    listItems.push(list.elements[i].value);
  }
  printList(listItems);
  clearList();
};
//This takes all the values from listItems and prints them into a list
function printList(xList){
  for(var i=0; i<xList.length;i++){
    var newListItem = document.createElement('li');
    newListItem.innerText = xList[i];
    createXbtn(newListItem);
    createPrioritybtns(newListItem);
    printedList.append(newListItem);
  }
};

function createXbtn(itemOnList){ //Creates a button attached to any item created on the list and adds a an event listener to that button
  var xBtn = document.createElement('button');
  xBtn.className = 'delParent'
  xBtn.innerText = 'X';
  itemOnList.append(xBtn);
};

function createPrioritybtns(itemOnList){
  var pBtnU = document.createElement('button');
  var pBtnD = document.createElement('button');
  pBtnU.className = 'uBtn';
  pBtnU.innerText = '^';
  pBtnD.className = 'dBtn';
  pBtnD.innerText = 'v';
  itemOnList.append(pBtnU);
  itemOnList.append(pBtnD);
}

oL.addEventListener('click', function(e){ //If the ordered list button is clicked- then remove it's parent which is li
  if (e.target.className == 'delParent'){
    e.target.parentElement.remove();
  } else if(e.target.className == 'uBtn'){
    e.target.parentElement.parentElement.insertBefore(e.target.parentElement,e.target.parentElement.previousSibling);
  } else if(e.target.className == 'dBtn'){
    if(e.target.parentElement.nextSibling == null || e.target.parentElement.nextSibling.nextSibling == null){
      e.target.parentElement.parentElement.append(e.target.parentElement);
    }else{
    e.target.parentElement.parentElement.insertBefore(e.target.parentElement,e.target.parentElement.nextSibling.nextSibling)
  };
  };
});


function clearList(){
  numOfItems = 0;
  while (list.firstChild) {
  list.removeChild(list.firstChild);
}
  };

addButton.addEventListener('click', addItem);
submitButton.addEventListener('click', collectList);
