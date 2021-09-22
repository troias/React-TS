import React from 'react'
import Todo from '../../models/Todo'
import classes from './ToDoItem.module.css'

const TodoItem: React.FC<{item: Todo}> = (props) => {
    return (
        <div className={classes.item}>
            <h1>{props.item.id}</h1>
            <h1>{props.item.text}</h1>
        </div>
    )
}

export default TodoItem