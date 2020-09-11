/*
 * Created by: :component
 * Date: 2020-09-10 12:00:23
 */

import React from "react";

export const Item = (props) => {
  //map the items to a display
  return props.items.map((item, index) => {
    return item.edit ? (
      <div>
        <br />
        <input defaultValue={item.title} onChange={(e) => props.updateVal(e)} />
        <button onClick={() => props.onSaveEdit(index)}>Save</button>
        <button onClick={() => props.cancelEditItem(index)}>Cancel</button>
      </div>
    ) : (
      <div className="items">
        <p className="itemContent">{item.title}</p>
        <button
          onClick={() => props.editItem(index)}
          style={{ display: "inline-block" }}
        >
          Edit
        </button>
        <button
          onClick={() => props.removeItem(index)}
          style={{ display: "inline-block" }}
        >
          Delete
        </button>
      </div>
    );
  });
};
