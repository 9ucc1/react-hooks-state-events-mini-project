import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [details, setDetails] = useState("")
  const [category, setCategory] = useState()

  function handleChange(event){
    if(event.target.name === "text"){
      setDetails(event.target.value)
    } else if (event.target.name === "category"){
      setCategory(event.target.value)
    }
  }

  function handleSubmit(event){
    event.preventDefault()
    onTaskFormSubmit(details, category)
  }

  function renderCategories(){
    return categories.map(category =>{
      if (category !== "All") {
      return (
        <option value={category} key={category}>{category}</option>
      )}
    })
  }

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} id="task-details"/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange} id="task-categories">
          {renderCategories()}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" onClick={handleSubmit}/>
    </form>
  );
}

export default NewTaskForm;
