import React from "react";
import {useState}  from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [items, setItems] = useState(itemData)
  const [isDark, setIsDark] = useState(false);
  const [selectedCategory, setSelectedCategory ] = useState("All");
  const appClass = isDark ? "App dark" : "App light"

  const filteredItemsArray = items.filter((item)=>{
    if(selectedCategory === "All"){
      return items
    } else if (selectedCategory === "Produce"){
      return item.category === "Produce"
    } else if (selectedCategory === "Dairy"){
      return item.category === "Dairy"
    } else if (selectedCategory === "Dessert"){
      return item.category === "Dessert"
    }
  })
  console.log(filteredItemsArray)


  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={()=> setIsDark(!isDark)}>
        Dark Mode
        </button>
      </header>
      <ShoppingList items={filteredItemsArray} setCategory={setSelectedCategory} />
    </div>
  );
}

export default App;
