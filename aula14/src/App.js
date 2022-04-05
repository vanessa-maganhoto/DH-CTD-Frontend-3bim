import './styles.css'
import api from "./api"
import { useEffect, useState } from "react"

function App() {
  const [todos, setTodos] = useState([])

  async function getTodos() {
    const { data } = await api.get("/todo");
    console.log(data);
    setTodos(data);
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>

      <button onClick={getTodos}>Buscar todos</button>

      {/*  <form>
        <input placeholder="Titulo"/>
        <input placeholder="Descrição"/>
        Status <input type="checkbox"/>
        <input type="date"/>
        <button>Salvar</button>
      </form> */}

      {todos.map((todo) => (
        <li>{todo.title}</li>
      ))}
    </div>
  )
}

export default App;
