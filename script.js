const input = document.getElementById("input");
const Add = document.getElementById("Add");
const todolists = document.querySelector("#todolists");


let str = "";
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let index;
let edit = false;




Add.addEventListener('click',()=>{
    if(edit){
        edit = false;
        Add.innerHTML = "Add"
       let findData = input.value;
        todos.splice(index,1,findData)
        localStorage.setItem("todos",JSON.stringify(todos));
        showLists();
        input.value = "";
    }
    else{
        todos.push(input.value);
        localStorage.setItem("todos",JSON.stringify(todos));
        showLists()
        input.value = "";
    }
    
});

function showLists(){
    if(todos.length > 0){
        str = "";
        todos.forEach(todo=>{
            str += `<li class="item">${todo}<span ><i onclick="onDelete('${todo}')" class="fa-solid fa-delete-left"></i></span><span id="edit"><i
            onclick="onEdit('${todo}')" class="fa-regular fa-pen-to-square"></i></span></li>`
        });
        todolists.innerHTML = str;
    }
    else{
        todolists.innerHTML = "Please Add Values"
    }
}
showLists()


const onDelete = (todoitem) =>{
  todos = todos.filter(todo=>todo !== todoitem);
  localStorage.setItem("todos",JSON.stringify(todos));
  showLists();
}

const onEdit = (todoitem) =>{
    edit = true
     index = todos.findIndex(todo=>todo == todoitem);
    input.value = todos[index];
    Add.innerHTML = "Edit";
}