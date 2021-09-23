import React, { useRef, useContext } from 'react'
import classes from './NewToDo.module.css'
import { TodosContext } from '../../store/ToDosContext'

const NewToDo: React.FC = (props) => {
    const todosCtx = useContext(TodosContext)
    const textRef = useRef<HTMLInputElement>(null);


    const todoHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const currText = textRef.current!.value
        console.log("clicked")
        todosCtx.addToDo(currText)
    }

    return (
        <form onSubmit={todoHandler} className={classes.form}>
            <label htmlFor="text"> Todo </label>
            <input type="text" id="text" ref={textRef} placeholder="text"/>
            <button>Add Todo </button>
        </form>
    )
}

export default NewToDo
