import { useState } from "react";

const TaskList = ({ taskList }) => {
  

  return (
    <div className="taskList">
      {taskList.map((task) => {
        return (<div className="task-div" key={task.id}>
          <button>click</button>{task};
        </div>)
      })}
      
    </div>
  )
};

export default TaskList;
