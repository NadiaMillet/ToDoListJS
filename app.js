//SELECTEURS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//ECOUTEURS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click" , deleteChek); //la focntion qui permettera de supp et check le todo


//FUNCTIONS
function addTodo(event) {
  event.preventDefault();
  //Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Créer le Li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //Bouton Check
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Bouton Supprimer
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //AJOUTER NOTRE TODO À TODO-LIST
  todoList.appendChild(todoDiv);
  todoInput.value = ""; //pour réenitialiser le texte dans l'input
}

function deleteChek(e){
    
}