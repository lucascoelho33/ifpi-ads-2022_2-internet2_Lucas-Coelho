import { useState, useContext } from 'react';
import { TasksContext, TasksDispatchContext } from './components/tasks_context';




export function TaskList(){
    const tasks = useContext(TasksContext);
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <Task task={task}/>
                </li>
            ))}
        </ul>
    );
}

function Task({ task }) {
    const [isEditing, setisEditing] = useState(false);
    const dispatch = useContext(TasksDispatchContext);
    let taskContext;
    if (isEditing) {
        taskContext = (
            <>
                <input 
                  value={task.text}
                  onChange={e => {
                    dispatch({
                        type: 'changed',
                        task: {
                            ...task,
                            text: e.target.value
                        }
                    });
                  }} />
                <button onClick={() => setisEditing(false)}>
                    Save
                </button>
            </>
        );
    } else {
        taskContext = (
            <>
                {task.text}
                <button onClick={() => setisEditing(true)}>
                    Edit
                </button>
            </>
        );
    }
    return (
        <label>
            <input
              type="checkbox"
              checked={task.done}
              onChange={e => {
                dispatch({
                    type: 'changed',
                    task: {
                        ...task,
                        done: e.target.checked
                    }
                });
              }}
            />
            {taskContext}
            <button onClick={() => {
                dispatch({
                    type: 'deleted',
                    id: task.id
                });
            }}>
                Delete
            </button>
        </label>
    );
}

