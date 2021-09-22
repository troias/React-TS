import React, {useState} from 'react'
import Todo from '../../models/Todo'
import TodoList from './TodoList'
import NewToDo from './NewToDo'


const Todos: React.FC = () => {
    const [toDo, setToDo] = useState< Todo[]>([])
    console.log(toDo)

   const addToDoHandler = (item: string) => {
     
        const newToDo: any = new Todo(item)
        setToDo((prevState) => {
            return prevState.concat(newToDo)
        })
        console.log(newToDo)
    }

    const removeToDoHandler = (id: string) => {
        console.log(typeof id)
        
        // const newArr = toDo.filter(x => x.id!== id)
        // console.log(newArr)
        setToDo((prevState) => {
           
            return prevState.filter(x => x.id!== id)
        })
    }


    return (
        <div>
            <NewToDo todoText={addToDoHandler} />
            <TodoList items={toDo} removeToDo={removeToDoHandler} />

        </div>
    )
}

export default Todos
