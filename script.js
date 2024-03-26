const input = document.getElementById("input");
const Add = document.getElementById("Add");
const todolists = document.querySelector("#todolists");
let str = "";

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let index = 0;

const setTodosinLocalStorage = () =>{
    localStorage.setItem("todos",JSON.stringify(todos))
}

if(todos){
    iterate()
}

    



Add.addEventListener('click',(e)=>{
    if(e.target.innerHTML === "Add"){
        todos.push(input.value);
    }
    else{
        todos[index] = input.value;
    }
    setTodosinLocalStorage()
    iterate();
    input.value = "";
});


function iterate(){
    str = "";
    if(todos.length > 0){
        todos.forEach(todo=>{
            str += `<li class="item">${todo}<span ><i onclick="onDelete('${todo}')" class="fa-solid fa-delete-left"></i></span><span id="edit"><i
            onclick="onEdit('${todo}')"     class="fa-regular fa-pen-to-square"></i></span></li>`
        });
        todolists.innerHTML = str;
    }
    else{
        todolists.innerHTML = "<p>No items in Todos</p>"
    }
}

const onDelete = (text) =>{
  todos = todos.filter(todo=>todo !== text);
  setTodosinLocalStorage()
  iterate();
}

const onEdit = (text) =>{
  index = todos.findIndex(todo=>todo === text);
  input.value = todos[index]
  Add.innerHTML = "Edit";
  
}