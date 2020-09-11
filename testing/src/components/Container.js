/*
 * Created by: :component
 * Date: 2020-09-10 11:59:40
 */

import React, { useState, useReducer } from "react";
import { Buttons, Input, ItemEdit, ItemDisplay } from "./container/index";

export const Container = () => {

  const [items, setItems] = useState(
    // localStorage.getItem("itemList")
    //   ? JSON.parse(localStorage.getItem("itemList"))
    //   : //TODO: add storage option
    []
  );

  const [temp, setTemp] = useState([]);

  const isEdit = items.filter((x,i) => { return x.edit; }).length;

  const removeItem = (index) => {
    let tempList = items.slice();
    tempList.splice(index, 1);
    // console.log(tempList);
    setItems(tempList);
  };

  const editItem = (index) => {
    let tempList = items.slice();
    let i = 0;
    while (i < items.length) { 
      tempList[i].edit = false;
      i += 1;
    }
    tempList[index].edit = true;
    setTemp(tempList[index].title);
    // console.log('temp', temp)
    // console.log(tempList);
    setItems(tempList);
  };

  const cancelEditItem = (index) => {
    let tempList = items.slice();
    tempList[index].edit = false;
    // console.log(tempList);
    setItems(tempList);
  };

  const onSaveEdit = (index) => {
    let tempList = items.slice();
    // console.log('temp is', temp)
    tempList[index].title = temp;
    setTemp("");
    tempList[index].edit = false;
    // console.log(tempList);
    setItems(tempList);
  };

  const updateVal = (e) => {
    setTemp(e.target.value);
  };
  const [itemsToDo, changeitemsToDo] = useState(["hello", "text", "another"]);
  //new todo title temp holder
  const [todoName, setTodoName] = useState("");

  //function sets the new value of title to the lastest array value
  function handleClick() {
    setItems([...items, { title: todoName, edit: false }]);
    setTodoName("");
  }

  return (
    <div className="app-container">
      <div className="app-title">the TODO LIST</div>
      <div className="form">
        <div className="input-title">Add a Todo Item</div>
        <div>
          <Input setTodoName={setTodoName} todoName={todoName} />
          <button className="Add-Item-Button" onClick={handleClick}>
            Add item
          </button>

          {items.map((item, index) => {
            return (item.edit && (isEdit === 1)) ? (
              <ItemEdit
                updateVal={updateVal}
                onSaveEdit={onSaveEdit}
                cancelEditItem={cancelEditItem}
                item={item}
                key={index}
              />
            ) : (
              <ItemDisplay
                editItem={editItem}
                removeItem={removeItem}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
