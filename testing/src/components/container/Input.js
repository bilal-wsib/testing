/*
 * Created by: Bilal Malik
 * description: Component for input, handles styling and functionality
 * Date: 2020-09-10 12:00:12
 */

import React, { useState, useEffect } from "react";
export const Input = (props) => {
  return (
    <input
      className="input-style"
      value={props.todoName}
      onChange={(e) => props.setTodoName(e.target.value)}
    />
  );
};
