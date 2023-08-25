
import React from "react";
import './../styles/App.css';
import Tab from "./Tab.js";

const App = () => {

  const array = [
      {"name" : "Tab 1", "content": "Content for Tab 1"},
      {"name" : "Tab 2", "content": "Content for Tab 2"},
      {"name" : "Tab 3", "content": "Content for Tab 3"}];

  const array2 = [
      {"name" : "Tab A", "content": "Content for Tab A"},
      {"name" : "Tab B", "content": "Content for Tab B"},
      {"name" : "Tab C", "content": "Content for Tab C"}];

            
  return (
    <div>
        <Tab arr1 = {array} arr2 = {array2}/>
    </div>
  )
}

export default App
