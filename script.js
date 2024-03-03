const input = document.getElementById("input");
const Add = document.getElementById("Add");
const todolists = document.querySelector("#todolists");


let str = "";
let todos = JSON.parse(localStorage.getItem("todos")) || [];
console.log(todos);




Add.addEventListener('click',()=>{
    if(Add.innerHTML == "Add"){
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
    let index = todos.findIndex(todo=>todo == todoitem);
    console.log(index);
    
    input.value = todos[index];
    Add.innerHTML = "Edit";
    let findData = todos.find(todo=>todo == input.value);
    // console.log("outer",findData);
    
    
    Add.addEventListener('click',()=>{
        if(Add.innerHTML == "Edit"){
            findData = input.value
            // console.log("inner",findData);
            
            todos.splice(index,1,findData)
            localStorage.setItem("todos",JSON.stringify(todos));
            showLists();
        }
    })
    
}