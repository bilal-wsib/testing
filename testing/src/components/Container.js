/*
 * Created by: :component
 * Date: 2020-09-10 11:59:40
 */

import React, { useState, useReducer } from "react";
import { Buttons, Input, Item, MakeList } from "./container/index";

export const Container = () => {
  const [items, setItems] = useState(
    // localStorage.getItem("itemList")
    //   ? JSON.parse(localStorage.getItem("itemList"))
    //   : //TODO: add storage option
    []
  );
  const [itemsToDo, changeitemsToDo] = useState(["hello", "text", "another"]);

  return (
    <div className="app-container">
      <div className="app-title">the TODO LIST</div>
      <div className="form">
        <div className="input-title">Add a Todo Item</div>
        <Input />

        <div className="" style={{ marginTop: "4vmin" }}>
          <div style={{ paddingBottom: "4vmin" }}>TODOs:</div>
          {itemsToDo.map((item) => (
            <div
              style={{
                backgroundColor: "white",
                padding: "4vmin",
                borderRadius: "2vmin",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
