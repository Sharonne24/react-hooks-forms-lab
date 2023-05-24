import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }
  
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && searchTerm === "") {
      return true;
    } else if (selectedCategory === "All") {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (searchTerm === "") {
      return item.category === selectedCategory;
    } else {
      return (
        item.category === selectedCategory &&
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter
       onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
