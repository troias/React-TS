import Todo from '../../models/Todo'
import TodoItem from './TodoItem'




const TodoList: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <div>
            {
                props.items.map((item: any) =>
                    <>
                        <TodoItem key={item.id} item={item} /> <br />
                    </>)
            }

        </div>
    )
}

export default TodoList