import Todo from '../../models/Todo'
import TodoItem from './TodoItem'
import classes from './Todos.module.css'



const TodoList: React.FC<{ items: Todo[], removeToDo: (id: string) => void}> = (props) => {
    return (
        <div >
            {

                props.items.map((item: any) => {
                    return (
                        <ul className={classes.todos}>
                            <li> <TodoItem key={item.id} item={item} remove={props.removeToDo.bind(null, item.id)} /> </li>
                        </ul >
                    )
            })
        }

        </div>
    )
}























export default TodoList

