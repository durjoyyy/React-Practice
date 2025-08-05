import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  toDos: [
    {
      id: 1,
      toDoTitle: "Buy groceries",
      completed: false,
    },
    {
      id: 2,
      toDoTitle: "Read a book",
      completed: true,
    },
  ],

  addToDo: (toDo) => {},
  updateToDo: (id, toDo) => {},
  deleteToDo: (id) => {},
  toggleComplete: (id) => {},
});

export const useToDo = () => {
  return useContext(ToDoContext);
};

export const ToDoProvider = ToDoContext.Provider;
