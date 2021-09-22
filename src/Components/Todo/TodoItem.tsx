import React from 'react'
import Todo from '../../models/Todo'

const TodoItem: React.FC<{item: Todo}> = (props) => {
    return (
        <div>
            <h1>{props.item.id}</h1>
            <h1>{props.item.text}</h1>
        </div>
    )
}

export default TodoItem