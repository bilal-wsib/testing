/*
 * Created by: :component
 * Date: 2020-09-10 11:59:40
 */

import React, { useState, useReducer, useEffect } from "react";
import { Buttons, Input, ItemEdit, ItemDisplay } from "./container/index";

export const Container = () => {
  let temp;

  const [items, setItems] = useState(
    localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : []
  );

  useEffect(() => {
    console.log(items);
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const removeItem = (index) => {
    let tempList = items.slice();
    tempList.splice(index, 1);
    //console.log(tempList);
    setItems(tempList);
    localStorage.setItem("items", JSON.stringify(items));
  };

  const editItem = (index) => {
    let tempList = items.slice();
    tempList[index].edit = true;
    //console.log(tempList);
    setItems(tempList);
  };

  const cancelEditItem = (index) => {
    let tempList = items.slice();
    tempList[index].edit = false;
    //console.log(tempList);
    setItems(tempList);
  };

  const onSaveEdit = (index) => {
    let tempList = items.slice();
    tempList[index].title = temp;
    temp = "";
    tempList[index].edit = false;
    //console.log(tempList);
    setItems(tempList);
    localStorage.setItem("items", JSON.stringify(items));
  };

  const updateVal = (e) => {
    temp = e.target.value;
  };
  //new todo title temp holder
  const [todoName, setTodoName] = useState("");

  //function sets the new value of title to the lastest array value
  function handleClick() {
    if (todoName.trim()) setItems([...items, { title: todoName, edit: false }]);
    else alert("Please input a TODO before submitting");
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
            return item.edit ? (
              <ItemEdit
                updateVal={updateVal}
                onSaveEdit={onSaveEdit}
                cancelEditItem={cancelEditItem}
                item={item}
                index={index}
              />
            ) : (
              <ItemDisplay
                editItem={editItem}
                removeItem={removeItem}
                item={item}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
