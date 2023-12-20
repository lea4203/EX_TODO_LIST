import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Todo from './Todo';






function App() {

const [tasks, setTasks] = useState(() => {
  const data = localStorage.getItem('tasks');
  return data ? JSON.parse(data) : [];
}
);

const [newTask, setNewTask] = useState('');

function addTask() {
  if (newTask.trim() !== '') {
    setTasks([...tasks, newTask]);
    setNewTask('');
  }
}

  function deleteTask(index) {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  , [tasks]);


  return (
    <div className="App">
       <div className="body">
            <form className="form_todo">
                <div>
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <button type="button" onClick={addTask}>
                        Add Task
                    </button>
                </div>
                <div>
                    <ul>
                        {tasks.map((task, index) => (
                            <Todo
                                key={index}
                                task={task}
                                deleteTask={() => deleteTask(index)}
                            />
                        ))}
                    </ul>
                </div>
            </form>
        </div>
    </div>
  );
}

export default App;
