window.onload = function(){
    var btn = document.getElementById("btnAdd")
    btn.onclick = handleAdd
}


function handleAdd(){
    var text = document.getElementById("newToDo").value
    var text2= document.createTextNode(text)
    var todo = document.getElementById("todos")
    var li = document.createElement('li')
    var btn1 = document.createElement('Button')
    li.appendChild(text2)
    li.append(btn1)
    btn1.textContent = "Delete"
    btn1.onclick = handleDelete
    todo.appendChild(li)

};

function handleDelete(e) {
    var tag = e.target;
    var li = tag.parentNode;
    li.parentNode.removeChild(li);
  }