function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'One',
      isCompleted: false,
    },
    {
      text: 'Two',
      isCompleted: false,
    },
    {
      text: 'Three',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  const toggleCheckbox = index => {
    let temp = [...todos];
    temp[index].isCompleted = !todos[index].isCompleted;
    setTodos(temp);
  }

  
    return(
      <div className="app">
        <div id="content">
        <h1>To-Do List</h1>
        <TodoForm addTodo={addTodo} />
        <div className="todo-list container-sm px-0" >
          {todos.length != 0 
          ? 
            todos.map((todo, i) => (
              <Todo key={i} index={i} todo={todo} remove={removeTodo} toggleCheckbox={toggleCheckbox}/>
            )) 
          : 
            <p>Nothing on your list...</p>}
        </div>
        </div>
        
      </div>
    );
  }
  


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
