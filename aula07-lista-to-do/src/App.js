import { useState } from 'react';
import Button from './components/Button';
import './styles.css'
import tasksTemp from'./data.js'
import Item from './components/Item';



export default function App() {

  
  const[textoInput, setTextoInput] = useState("")

  const [tasks, setTasks] = useState(tasksTemp)

  function addItem(){
    
    const newTask = {
      id: Date.now().toString(),
      nome: textoInput,
      status: false,
    }
    console.log(newTask)
    
    setTasks([...tasks, newTask])
    setTextoInput("")
  }

  function deleteItem(id){
    const temp = tasks.filter((item)=>item.id !== id)
    setTasks(temp)
    console.log(id)
  }

  function handleTextInput(event){
    setTextoInput(event.target.value)
  }

  return (
    <>
    
    <header className='header'>
      <input 
        value={textoInput}
        className='input'
        onChange={(event)=> handleTextInput(event)} 
      />
      <div className='container_buttons'>
        <Button texto="Adicionar" onClick={addItem}/>
        <Button texto="Limpar"/>

      </div>
    </header>

    <main>
      { tasks.length > 0 ? (
          tasks.map((task) => (
            <Item 
              key={task.id} 
              id={task.id}
              nome={task.nome} 
              status={task.status} 
              funcaoApagar={deleteItem}
            />
          ))
  ) : (
    <span>Nenhuma tarefa adicionada</span>
    )}
    </main>
    </>
  );
}

 
