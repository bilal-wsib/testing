/*
 * Created by: :component
 * Date: 2020-09-10 11:59:40
 */

import React from "react";
import { Buttons, Input, Item } from "./container/index";

export const Container = () => {
  return (
    <div className="app-container">
      <div className="app-title">the TODO LIST</div>
      <div className="form">
        <div className="add-item-container">
          <div className="input-title">Add a Todo Item</div>
          <div>
            <Input />
          </div>
        </div>
      </div>
    </div>
  );
};
