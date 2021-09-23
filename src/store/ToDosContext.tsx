import React, { useState } from 'react';
import Todo from '../models/Todo'

type TodosContextObj = {
    items: Todo[],
    addToDo: (item: string) => void,
    removeToDo: (id: string) => void
}

export const TodosContext = React.createContext<TodosContextObj>
    ({
        items: [],
        addToDo: () => { },
        removeToDo: () => { }
    })

const TodosContextProvider: React.FC = (props) => {

    const [toDos, setToDo] = useState< Todo[]>([])
   

   const addToDo = (item: string) => {
     console.log(item)

        const newToDo: any = new Todo(item)
        setToDo((prevState) => {
            return prevState.concat(newToDo)
        })
      
    }

    const removeToDo = (id: string) => {
      
      
        setToDo((prevState) => {
           
            return prevState.filter(x => x.id!== id)
        })
    }

    const contextValue: TodosContextObj  = {
        items: toDos,
        addToDo,
        removeToDo,
    }
    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>)
}

export default TodosContextProvider