// user input - includes validation
function TodoForm({addTodo}){
  const [value,setValue] = React.useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form class="d-flex container-sm px-0 mb-3" onSubmit={handleSubmit}>
      <input className="form-control me-2" type="text" placeholder="Add todo" value={value} onChange={e => setValue(e.target.value)}/>
      <button class="btn btn-outline-success" type="submit">Add</button>
    </form>
  )
}