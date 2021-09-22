import React from 'react'
import Todo from '../models/Todo'

const DummyToDo = [
    new Todo("learn React"),
     new Todo("learn React1"),
]



const TodoItem: React.FC<{item: Todo}> = (props) => {
    return (
        <div>
            <h1>{props.item.id}</h1>
            <h1>{props.item.text}</h1>
        </div>
    )
}

const TodoList: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <div>
            {
                props.items.map((item: any) => <> <TodoItem item={item} /> )</>)
            }

        </div>
    )
}



const Todos: React.FC = () => {
    return (
        <div>

            <TodoList items={DummyToDo} />

        </div>
    )
}

export default Todos
