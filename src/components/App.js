import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import Filter from "./Filter";
import ItemForm from "./ItemForm";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [newItemName, setNewItemName] = useState("");
  const [searchText, setSearchText] = useState("");

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (newItemName.trim() !== "") {
      const newItem = { name: newItemName};
      setItems([...items, newItem]);
      setNewItemName("");
    }
  }

  function handleNewItemNameChange(event) {
    setNewItemName(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchText(event.target.value);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <Filter onSearchChange={handleSearchChange} />
      <ShoppingList items={items} searchText={searchText} />
      <ItemForm
        newItemName={newItemName}
        onFormSubmit={handleFormSubmit}
        onNewItemNameChange={handleNewItemNameChange}
      />
    </div>
  );
}

export default App;
