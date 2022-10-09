import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {

  const [tasksStateArray, setTasksStateArray] = useState(TASKS)
  const [filterBy, setFilterBy] = useState("All")
 
  const filterTasksByCategory = (event) => {
    setFilterBy(event.target.innerText)
    filterTasks()
    /*let filteredTasks = tasksStateArray.filter(task => {
    if (event.target.innerText === "All"){
      return TASKS
    } else 
      setTasksStateArray(TASKS)
      return (task.category === event.target.innerText)
    })
    setTasksStateArray(filteredTasks)*/
  }
  
  //let renderedTasks = tasksStateArray
  function filterTasks(){
    return tasksStateArray.filter(task => {
      if (filterBy === "All"){
        return true
      } else {
        return task.category === filterBy
      }
    })
  }

  let filteredTasks = filterTasks()
  //let renderedTasks = filterBy ? filteredTasks : TASKS

  function handleTaskFormSubmit(details, category){
    setTasksStateArray([...tasksStateArray, {text: details, category: category}])
    document.getElementById("task-details").value = ""
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterTasksByCategory={filterTasksByCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} setTasksStateArray={setTasksStateArray}/>
    </div>
  );
}

export default App;
