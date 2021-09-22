
import React from 'react'
import Todo from '../../models/Todo'
import classes from './ToDoItem.module.css'

const TodoItem: React.FC<{item: Todo, remove: (id: string) => void}> = (props) => {

    const removeToDoHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        props.remove(props.item.id)
    }

    return (
        <div className={classes.item} onClick={removeToDoHandler}>
            <h1>{props.item.id}</h1>
            <h1>{props.item.text}</h1>
        </div>
    )
}

export default TodoItem