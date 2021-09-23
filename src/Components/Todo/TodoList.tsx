import { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../../store/ToDosContext";

const TodoList: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);
  return (
    <div>
      {todosCtx.items.map((item: any) => {
        return (
          <ul className={classes.todos}>
            <li>
              <TodoItem
                key={item.id}
                item={item}
                remove={todosCtx.removeToDo.bind(null, item.id)}
              />
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default TodoList;
