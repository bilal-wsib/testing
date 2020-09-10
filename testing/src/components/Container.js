/*
 * Created by: :component
 * Date: 2020-09-10 11:59:40
 */

import React, { useState, useReducer } from "react";
import { Buttons, Input, Item } from "./container/index";

export const Container = () => {
  const [items, setItems] = useState(
    // localStorage.getItem("itemList")
    //   ? JSON.parse(localStorage.getItem("itemList"))
    //   : //TODO: add storage option
    []
  );
  return (
    <div className="app-container">
      <div className="app-title">the TODO LIST</div>
      <div className="form">
        <div className="input-title">Add a Todo Item</div>
        <div>
          <Input />
          {/* {itemsToDo.map(item =>
          )} */}
        </div>
      </div>
    </div>
  );
};
