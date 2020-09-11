/*
 * Created by: :component
 * Date: 2020-09-10 12:00:23
 */

import React from "react";

export const ItemEdit = (props) => {
  return (
    <div>
      <br />
      <input
        defaultValue={props.item.title}
        onChange={(e) => props.updateVal(e)}
      />
      <button onClick={() => props.onSaveEdit(props.index)}>Save</button>
      <button onClick={() => props.cancelEditItem(props.index)}>Cancel</button>
    </div>
  );
};

export const ItemDisplay = (props) => {
  return (
    <div className="items">
      <p className="itemContent">{props.item.title}</p>
      <button
        onClick={() => props.editItem(props.index)}
        style={{ display: "inline-block" }}
      >
        Edit
      </button>
      <button
        onClick={() => props.removeItem(props.index)}
        style={{ display: "inline-block" }}
      >
        Delete
      </button>
    </div>
  );
};
