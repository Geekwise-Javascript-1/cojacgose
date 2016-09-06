var addButton = document.getElementById('addItem');
var list = document.getElementById('listId');
var submitButton = document.getElementById('submit');
var printedList = document.getElementById('printedList');
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
    printedList.append(newListItem);
  }
};

function createXbtn(item){
  var xBtn = document.createElement('button');
  xBtn.className = 'delParent'
  xBtn.innerText = 'X';
  item.append(xBtn);
};

function delParent(){
  console.log('test');
}

function clearList(){
  while (list.firstChild) {
  list.removeChild(list.firstChild);
}
  };
addButton.addEventListener('click', addItem);
submitButton.addEventListener('click', collectList);
