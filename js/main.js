const Button = document.getElementById('add');

// user clicked on the add button if there was a text in item add that to list. 
  Button.addEventListener('click', () => {
  var value = document.getElementById('item').value;
  
  if (value) {

  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = value;
  ul.appendChild(li);
  var addButton = document.createElement("plus");
  var removeButton = document.createElement("minus");
  removeButton.innerHTML = "<img src=img/remove_icon.svg class=deletebutton>";  
  addButton.innerHTML = "<img src=img/done_icon.svg class=addbutton>";
  li.appendChild(addButton);
  li.appendChild(removeButton);
  
  // add button i meant tick
  // addButton.addEventListener('click', ()=>{
  //   // console.log('button clicked');
  //   // let ul = document.getElementsByTagName('ul') [0];
  //   // let li = document.createElement('li');
  //   // li.textContent = value;
  //   // ul.appendChild(li);
  //   // var removeButton = document.createElement("minus");
  //   // removeButton.innerHTML = "<img src=img/remove_icon.svg class=deletebutton>";
  //   // li.appendChild(removeButton);
  //   var completed = [];
  //   let ul = document.getElementsByTagName('ul') [0];
  //   let li = document.createElement('li');
  //   li.textContent = value;
  //   ul.appendChild(li);
  //   li.push(completed);
  // });

  // delete button which removes
  removeButton.addEventListener('click', ()=>{
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.querySelector('li');
    ul.removeChild(li);
  });

 }

  
});