/*
 * Created by: :component
 * Date: 2020-09-10 11:59:40
 */

import React, { useState, useReducer } from "react";
import { Buttons, Input, Item, MakeList } from "./container/index";

export const Container = () => {
  let temp;

  const [items, setItems] = useState(
    // localStorage.getItem("itemList")
    //   ? JSON.parse(localStorage.getItem("itemList"))
    //   : //TODO: add storage option
    [
      { title: "hello", edit: false },
      { title: "test", edit: false },
    ]
  );

  const removeItem = (index) => {
    let tempList = items.slice();
    tempList.splice(index, 1);
    //console.log(tempList);
    setItems(tempList);
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
          <Item
            onSaveEdit={onSaveEdit}
            cancelEditItem={cancelEditItem}
            editItem={editItem}
            updateVal={updateVal}
            removeItem={removeItem}
            items={items}
          />
        </div>
      </div>
    </div>
  );
};
