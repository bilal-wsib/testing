/*
 * Created by: :component
 * Date: 2020-09-10 11:59:40
 */

import React, { useState, useReducer } from "react";
import { Buttons, Input, Item } from "./container/index";

export const Container = () => {
  let temp;

  const [items, setItems] = useState(
    // localStorage.getItem("itemList")
    //   ? JSON.parse(localStorage.getItem("itemList"))
    //   : //TODO: add storage option
    [
      { title: "hello", edit: true },
      { title: "test", edit: false },
    ]
  );

  const removeItem = (index) => {
    let tempList = items.slice();
    tempList.splice(index, 1);
    console.log(tempList);
    setItems(tempList);
  };

  const editItem = (index) => {
    let tempList = items.slice();
    tempList[index].edit = true;
    console.log(tempList);
    setItems(tempList);
  };

  const cancelEditItem = (index) => {
    let tempList = items.slice();
    tempList[index].edit = false;
    console.log(tempList);
    setItems(tempList);
  };

  const onSaveEdit = (index) => {
    let tempList = items.slice();
    tempList[index].title = temp;
    temp = "";
    tempList[index].edit = false;
    console.log(tempList);
    setItems(tempList);
  };

  const updateVal = (e) => {
    temp = e.target.value;
  };

  return (
    <div className="app-container">
      <div className="app-title">the TODO LIST</div>
      <div className="form">
        <div className="input-title">Add a Todo Item</div>
        <div>
          <Input />

          {items.map((item, index) => {
            return item.edit ? (
              <div>
                <br />
                <input
                  placeholder={item.title}
                  onChange={(e) => updateVal(e)}
                />
                <button onClick={() => onSaveEdit(index)}>Save</button>
                <button onClick={() => cancelEditItem(index)}>Cancel</button>
              </div>
            ) : (
              <div className="items">
                <p className="itemContent">{item.title}</p>
                <button
                  onClick={() => editItem(index)}
                  style={{ display: "inline-block" }}
                >
                  Edit
                </button>
                <button
                  onClick={() => removeItem(index)}
                  style={{ display: "inline-block" }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
