import React, { useContext } from 'react'
import TodoList from './TodoList'
import NewToDo from './NewToDo'
import { TodosContext } from '../../store/ToDosContext'
import TodosContextProvider from '../../store/ToDosContext'

const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext)
    console.log(todosCtx)
    return (
        <TodosContextProvider>
            <NewToDo />
            <TodoList />
        </TodosContextProvider>
    )
}

export default Todos
