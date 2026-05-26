let todos =[]
let id = 1;


const input = document.querySelector(".input-task");
    input.addEventListener("keydown", function(event){
      if(event.key === "Enter"){
        addTodo();
      }
    })   

const button = document.querySelector(".add-btn");
    button.addEventListener("click", addTodo);
    
const list = document.querySelector(".to-do-list");

function addTodo()
{
  const task = input.value.trim();

  if(task === ""){
    return
  }

  todos.push({id: id, text: task, done: false});
  id++;

  render()

  input.value = "";
}
    
  function render(){
    list.innerHTML = "";

    todos.forEach((todo) => {
      const li = document.createElement("p");
      li.classList.add("to-do-item");

    if(todo.done){ 
      li.classList.add("done");
      }

   const span = document.createElement("span");
   span.textContent = todo.text;
   li.appendChild(span);

   const btn = document.createElement("button");
   btn.textContent = "X"
   btn.classList.add("delete-btn");
   btn.addEventListener("click", function(){
     todos = todos.filter((t) => t.id !== todo.id);
    render();
   })

  li.addEventListener("click", function(){
    todos = todos.map((t) => {
      if(t.id === todo.id){
        t.done = !t.done;
      }
      return t;
    })

    render(); 
   }) 

   li.appendChild(btn);
   list.appendChild(li);
  })

   

  
    
}

