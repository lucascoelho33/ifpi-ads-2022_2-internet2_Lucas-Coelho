import { useState } from 'react';
import './App.css';
import { AddTask } from './components/add_task';
import { TaskList } from './components/list_task';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  function handleAddTask(text: string) {
    dispatch([
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangeTask(task: Task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <div className="App">
      <h1>React + Reducer</h1>
      <h3>Tasks</h3>
      
      <AddTask onAddTask={handleAddTask} />
      
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
      
    </div>
  )
}

function tasksReducer(tasks: Task[], action: any) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t: Task) => {
        if(t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t: Task) => t.id !== action.id);
    }
    default: {
      throw Error("Unknow action: " + action.type);
    }
  }
}

export interface Task{
  id: number
  text: string
  done: boolean
}

let nextId = 3;

const initialTasks: Task[] = [
  {id: 0, text: 'Elaborar Aulas', done: true},
  {id: 1, text: 'Estudar Flutter - Estados', done: false},
  {id: 2, text: 'Correr avenida Raul Lopres', done: false},
];
function dispatch(arg0: { id: number; text: string; done: boolean; }[]) {
  throw new Error('Function not implemented.');
}

