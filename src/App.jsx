import './App.css'
import {useEffect, useState} from "react";

function App() {
    const[todos, setToDos] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setToDos(data))
            setToDos(data)
            setLoading(true)
            .catch(err => console.error(err));
            setError(err.message)
            setLoading(false)
    },[])

    if(loading)
        return <p>Loading...</p>

    if(error)
    return
    <div>
        <p>Error occured</p>
    <button onClick={fetch}>Retry</button>
    </div>

  return (
      <div key={todo.id}>
          <p>ID: {todo.id}</p>
          <p>Title: {todo.title}</p>
          <p>Completed: {todo.completed ? "Yes" : "No"}</p>
          <p>UserId: {todo.userId}</p>
          </div>
  );
}

export default App
