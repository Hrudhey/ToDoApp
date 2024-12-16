let name= document.getElementById('name');
let password= document.getElementById('pwd');
var var1;
var var2;
var var3;
var var4;
let err= document.getElementById('error');
const todoContainer = document.getElementById('todos');
let completedCount = 0;




function validatename(){
     const regex= /^admin$/;
     if(regex.test(name.value)){
       var1= 'ok';
    
    }
    else{
        var2= 'not ok';
        
    }
}
function validatepass(){
    const regpass= /^12345$/
    if(regpass.test(password.value)){
       var3= 'ok';
       
    }
    else{
      var4= 'not ok';
       
    }
   } 
   function validate()
{
    if(var1=='ok' &&  var3== 'ok')
    {

         return true;
    }
    else
    {   err.innerHTML= "Incorrect Username or Password";
        err.style.color= "white";
        return false;
        
    }
}

// Function to fetch todos and render them
function fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => {
        renderTodos(todos);
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  }

   // Function to render todos
   function renderTodos(todos) {
    todos.forEach(todo => {
      const todoItem = document.createElement('div');
      todoItem.className = 'todo-item';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = todo.completed;
      if (todo.completed) {
        todoItem.classList.add('completed');
      }

      checkbox.addEventListener('change', () => handleCheckboxChange(checkbox, todoItem));

      const label = document.createElement('label');
      label.textContent = todo.title;

      todoItem.appendChild(checkbox);
      todoItem.appendChild(label);
      todoContainer.appendChild(todoItem);
    });
  }

   // Function to handle checkbox changes
   function handleCheckboxChange(checkbox, todoItem) {
    if (checkbox.checked) {
      todoItem.classList.add('completed');
      completedCount++;
    } else {
      todoItem.classList.remove('completed');
      completedCount--;
    }

    // Check if 5 tasks are completed
    if (completedCount === 5) {
      validateCompletedTasks().then(message => {
        alert(message);
      });
    }
  }
   // Promise to validate completed tasks
   function validateCompletedTasks() {
    return new Promise((resolve) => {
      resolve('Congrats. 5 Tasks have been Successfully Completed');
    });
  }

  // Initialize the application
  fetchTodos();