const fs = require("fs")
const {Command} = require("commander")

const program  = new Command();

const todosFile = 'todo.json';


function readTodos() {
  if (!fs.existsSync(todosFile)) {
      // If file doesn't exist, return an empty array
      return [];
  }

  const data = fs.readFileSync(todosFile, 'utf-8');
  
  if (data.trim() === "") {
      // If file is empty, return an empty array
      return [];
  }
  
  try {
      // Try to parse the JSON data
      return JSON.parse(data);
  } catch (err) {
      console.log("Error reading todos.json:", err.message);
      return [];
  }
}


function writeTodo(){
  fs.writeFileSync(todosFile,JSON.stringify(todosFile,null,2));
}

program
  .command('add <task>')
  .description('add a new todo')
  .action((task)=>{
    const todos = readTodos();
    console.log(todos);
    
    todos.push({task,done:false});
    writeTodo(todos);
    console.log(`Added todo : ${task}`); 
  });





program
  .command('delete <index>')
  .description('Delete a todo by index')
  .action((index)=>{
    const todos = readTodos();
    console.log(todos);
    
    if(index>=0 && index<todos.length){
      todos.splice(index,1);
      writeTodo(todos);
      console.log(`Delete todo at index ${index}`);
    }else{
      console.log('Invalid index');    
    }
  });

// program
//   .command(mark-done)

  program.parse()

