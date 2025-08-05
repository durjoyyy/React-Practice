import { useState,useEffect } from "react";
import "./App.css";
import { ToDoProvider } from "./context/ToDoContext";
import ToDoForm from './components/ToDoForm';
import TodoItem from "./components/ToDoItem";

function App() {
  const [toDos, setToDos] = useState([]);

  const addToDo = (todo) => {
    setToDos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateToDo = (id, todo) => {
    setToDos((prev) => prev.map((item) => (item.id === id ? todo : item)));
  };

  const deleteToDo = (id) => {
    setToDos((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleComplete = (id) => {
    setToDos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  useEffect(() => {
    const todosLS= JSON.parse(localStorage.getItem("todos"));
    console.error(todosLS);
    if(todosLS && todosLS.length>0){
      setToDos(todosLS);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(toDos));
  }, [toDos])
  
  

  return (
    <ToDoProvider
      value={{ toDos, addToDo, updateToDo, deleteToDo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <ToDoForm/>
             </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {toDos.map((td)=>(
              <div key={td.id} className="w-full">
                <TodoItem todo={td} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;
