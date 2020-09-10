/*
 * Created by: :component
 * Date: 2020-09-10 11:59:40
 */

import React, { useState } from "react";
import { Buttons, Input, Item } from "./container/index";

export const Container = () => {

const [itemsToDo, changeitemsToDo] = useState(['hello', 'text', 'another']);

  return (
    <div className="app-container">
      <div className="app-title">the TODO LIST</div>
      <div className="form">
        <div className="input-title">Add a Todo Item</div>
        <div>
          <input />
          {/* {itemsToDo.map(item =>
          )} */}

        </div>
      </div>
    </div>
  );
};
