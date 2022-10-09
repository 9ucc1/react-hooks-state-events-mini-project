import React from "react";

function CategoryFilter({categories, filterTasksByCategory}) {

  const handleCategoryFilter= (event)=>{
    let siblings= [...event.target.parentElement.children]
    siblings.map(sibling =>{sibling.className=""})
    event.target.className ="selected"
    filterTasksByCategory(event)
  }

  const renderButtons = categories.map(category => {
    return(
      <button key={category} onClick={handleCategoryFilter}>{category}</button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {renderButtons}
    </div>
  );
}

export default CategoryFilter;
