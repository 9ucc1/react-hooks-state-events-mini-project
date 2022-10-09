import React from "react";
import Task from "./Task"

function TaskList({tasks}) {

  const deleteTask= (event)=>{
    //console.log(event.target.parentElement)
    event.target.parentElement.remove()
  }

  const tasksArray = tasks.map((task, index) => {
    return <Task 
      key={index} 
      text={task.text} 
      category={task.category}
      deleteTask={deleteTask}
      />
  })



  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {/* <Task Task={TASKS.text} Category={TASKS.category} deleteTask={deleteTask}/> */}
      {tasksArray}
    </div>
  );
}

export default TaskList;
