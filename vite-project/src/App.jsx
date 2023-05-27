import { useState } from "react";
import "./App.css";
import TaskList from "./TaskList";

function App() {
  const [task, setTasks] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTaskToList = (task) => {
    setTasks([...taskList, task]);
    setTaskList("");
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setTasks(e.target.taskValue.value);
    addTaskToList(task);
  };

  return (
    <>
      <h1>Tasks for Jon</h1>
      <div className="input-div">
        <form onSubmit={handleInputChange}  >
          <input name='taskValue' type="text" />

          <button type='submit'>
            click here to submit
          </button>
        </form>
        {console.log(task, " : is task")}
        {console.log(taskList, " : is taskList")}
      </div>
      <TaskList taskList={taskList} />
    </>
  );
}

export default App;
