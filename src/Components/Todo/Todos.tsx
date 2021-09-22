import React, {useState} from 'react'
import Todo from '../../models/Todo'
import TodoList from './TodoList'
import NewToDo from './NewToDo'


const Todos: React.FC = () => {
    const [toDo, setToDo] = useState< Todo[]>([])
    console.log(toDo)
   const toDoTexthandler = (item: string) => {
     
        const newToDo: any = new Todo(item)
        setToDo((prevState) => {
            return prevState.concat(newToDo)
        })
        console.log(newToDo)
    }



    return (
        <div>
            <NewToDo todoText={toDoTexthandler} />
            <TodoList items={toDo} />

        </div>
    )
}

export default Todos
