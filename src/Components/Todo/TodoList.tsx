import Todo from '../../models/Todo'
import TodoItem from './TodoItem'
import classes from './Todos.module.css'



const TodoList: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <div >
            {

                props.items.map((item: any) => {
                    return (
                        <ul className={classes.todos}>
                            <li> <TodoItem key={item.id} item={item} /> </li>
                        </ul >
                    )
            })
        }

        </div>
    )
}























export default TodoList

