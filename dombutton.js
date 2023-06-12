var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

//Form - Submit Event
form.addEventListener('submit',addItem);

//ItemList - Click Event
itemList.addEventListener('click',removeItem);

//Function addItem
function addItem(e){
    e.preventDefault();

//Input as item
var newItem=document.getElementById('item').value;

//Create new li Element
var li=document.createElement('li');
//class name
li.className='list-group-item';
//Text Node
li.appendChild(document.createTextNode(newItem));

//Create Delete Button
var deleteBtn=document.createElement('button');
//Class Name
deleteBtn.className='btn btn-danger btn-sm float-right delete';
//Text Node
deleteBtn.appendChild(document.createTextNode('Edit'));

//Append Button to li
li.appendChild(deleteBtn);
//Append li to item list
itemList.appendChild(li);

//Create Delete Button
var deleteBtn=document.createElement('button');
//Class Name
deleteBtn.className='btn btn-danger btn-sm float-right delete';
//Text Node
deleteBtn.appendChild(document.createTextNode('X'));

//Append Button to li
li.appendChild(deleteBtn);
//Append li to item list
itemList.appendChild(li);
}

//Function removeItem
function removeItem(e){
    if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
        var li=e.target.parentElement;
        itemList.removeChild(li);
    }
}
}