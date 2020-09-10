/*
 * Created by: Bilal Malik
 * description: Component for input, handles styling and functionality
 * Date: 2020-09-10 12:00:12
 */

import React, { useState, useEffect } from "react";
export const Input = () => {
  const [todoName, setTodoName] = useState("");
  useEffect(() => console.log(todoName), [todoName]);
  return (
    <input
      className="input-style"
      onChange={(e) => setTodoName(e.target.value)}
    />
  );
};
