import { useState } from 'react';
import './App.css';
import { AddTask } from './components/add_task';
import { TaskList } from './components/list_task';
import { TasksContext, TasksDispatchContext } from './components/tasks_context'; 

export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer,initialTasks);

  function handleAddTask(text: string) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task: any) {
    dispatch({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <h1>Day off in Kyoto</h1>
        <AddTask
          onAddTask={handleAddTask}
        />
        <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

function tasksReducer(tasks: { id: any; }[], action: { type: string; id: any; text: any; task: { id: any; }; }) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map((t: { id: any; }) => {
        if(t.id == action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t: { id: any; }) => t.id !== action.id);
    }
    default: {
      throw Error('Uncknow action: ' + action.type);
    }
  }
}

let nextId = 3;

const initialTasks = [
  {id: 0, text: 'Philosopher`s Path', done: true},
  {id: 1, text: 'Visit the temple', done: false},
  {id: 2, text: 'Drink matcha', done: false},
];


function useReducer(tasksReducer: (tasks: { id: any; }[], action: { type: string; id: any; text: any; task: { id: any; }; }) => ({ id: any; } | { id: any; text: any; done: boolean; })[], initialTasks: { id: number; text: string; done: boolean; }[]): [any, any] {
  throw new Error('Function not implemented.');
}

