var addButton = document.getElementById('addItem');
var list = document.getElementById('listId');
var submitButton = document.getElementById('submit');
var printedList = document.getElementById('printedList');
var oL = document.querySelector('ol');
var saveButton = document.getElementById('savelist');
var numOfItems = 0;
var divSaved = document.getElementById('savedLists');

//use JSON.stringify(obj) and JSON.parse(obj) to convert and revert an item to and from a string
//as localStorage can only be used to store strings
function setup(){if(!localStorage.getItem('lists')){
  var savedLists = JSON.stringify([]);
  localStorage.setItem('lists',savedLists);
}else{
  var savedLists = JSON.parse(localStorage.getItem('lists'));
};};
setup();
listLister();

function listLister(){ //Clears the load list - then adds all the lists back with a button
  while (divSaved.firstChild) {
  divSaved.removeChild(divSaved.firstChild);
};
  for(i=0;i<=JSON.parse(localStorage.getItem('lists')).length-1;i++){
    var loadButton = document.createElement('button');
    loadButton.innerText = JSON.parse(localStorage.getItem('lists'))[i][0];
    divSaved.appendChild(loadButton);
  };
};

addButton.addEventListener('click', addItem);
//This adds an input field with a numbered ID unto the form(listID) when called
function addItem(){
  var newInput = document.createElement('input');
  newInput.id = 'listItem' + numOfItems;
  newInput.className = 'listItem'
  newInput.placeholder = "item number " + numOfItems;
  list.appendChild(newInput);
  numOfItems++;
};

submitButton.addEventListener('click', collectList);
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
  console.log(xList);
  for(var i=0; i<xList.length;i++){
    var newListItem = document.createElement('li');
    newListItem.innerText = xList[i];
    createXbtn(newListItem);
    createPrioritybtns(newListItem);
    printedList.append(newListItem);
  };
};

function createXbtn(itemOnList){ //Creates a button attached to any item created on the list and adds a an event listener to that button
  var xBtn = document.createElement('button');
  xBtn.className = 'delParent'
  xBtn.innerText = 'X';
  itemOnList.append(xBtn);
};

function createPrioritybtns(itemOnList){ //creates the up and down buttons to move around items on list
  var pBtnU = document.createElement('button');
  var pBtnD = document.createElement('button');
  pBtnU.className = 'uBtn';
  pBtnU.innerText = '^';
  pBtnD.className = 'dBtn';
  pBtnD.innerText = 'v';
  itemOnList.append(pBtnU);
  itemOnList.append(pBtnD);
};

function clearList(){
  numOfItems = 0;
  while (list.firstChild) {
  list.removeChild(list.firstChild);
};
  };

oL.addEventListener('click', function(e){ //Buttons to reorder list
  if (e.target.className == 'delParent'){
    e.target.parentElement.remove();
  } else if(e.target.className == 'uBtn'){
    e.target.parentElement.parentElement.insertBefore(e.target.parentElement,e.target.parentElement.previousSibling);
  } else if(e.target.className == 'dBtn'){
    if(e.target.parentElement.nextSibling == null || e.target.parentElement.nextSibling.nextSibling == null){
      e.target.parentElement.parentElement.append(e.target.parentElement);
    }
    else{
    e.target.parentElement.parentElement.insertBefore(e.target.parentElement,e.target.parentElement.nextSibling.nextSibling)
  };
  };
});

saveButton.addEventListener('click',saveList);

function saveList(){
  var listArr = [];
  var listName = prompt('Please Title Your List:');
  listArr.push(listName);
  for(var i=1; i<oL.childElementCount+1; i++){
    listArr.push(oL.childNodes[i].firstChild.textContent);
  };
  storeList(listArr);
};

function storeList(list){
  var listToSave = JSON.parse(localStorage.getItem('lists'));
  listToSave.push(list);
  savedLists = listToSave;
  localStorage.setItem('lists',JSON.stringify(savedLists));
  listLister();
};

divSaved.addEventListener('click', loadList);

function loadList(e){
  if(e.target.tagName='BUTTON'){
    var listName = e.target.innerText;
    for(i=0;i<JSON.parse(localStorage.getItem('lists')).length;i++)
      {if (listName == JSON.parse(localStorage.getItem('lists'))[i][0]){
        displayLoaded(JSON.parse(localStorage.getItem('lists'))[i]);};};};
};

function displayLoaded(list){
  clearEdit();
  printList(list.slice(1,list.length));
};

  function clearEdit(){
    while(oL.firstChild){
    oL.removeChild(oL.firstChild);};
  };
