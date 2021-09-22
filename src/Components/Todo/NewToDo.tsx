import React, { useRef } from 'react'
import classes from './NewToDo.module.css'


const NewToDo: React.FC< {todoText: (currtext: string) => void} > = (props) => {
    const textRef = useRef<HTMLInputElement>(null);


    const todoHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const currText = textRef.current!.value
        props.todoText(currText)
    }

    return (
        <form onSubmit={todoHandler} className={classes.form}>
            <label htmlFor="text">Todo text </label>
            <input type="text" id="text" ref={textRef} placeholder="text"/>
            <button>Add Todo </button>
        </form>
    )
}

export default NewToDo
