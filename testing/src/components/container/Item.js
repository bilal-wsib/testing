/*
* Created by: :component
* Date: 2020-09-10 12:00:23
*/

import React from "react";

const MakeList = (props) => {

    return props.items.map(items => 
        <div key={items.id} style={{
            border:"solid 1px black",
            margin:"10px", 
            padding:"10px"
        }}>
            <p style={{
                width:"100%"
            }}>
                {items.content}
            </p>
            <button onClick={() => props.editItem()}>Edit</button>
            <button onClick={() => props.deleteItem()}>Delete</button>
        </div>
    )
}

export const Item = ({ props }) => {

    //let items = props.items;

    //temporary array of object items untill we connect everything
    let tempItems = [
        {
            id: 1, 
            content: "first item"
        }, 
        {
            id: 2, 
            content: "second item"
        }, 
        {
            id: 3, 
            content: "third item"
        }, 
    ]

    //temp edit function
    function onEditClick(){
        console.log("editting");
    }

    //temp delete function
    function onDeleteClick(){
        console.log("deleting");
    }

    return(
        <div>
            <MakeList 
                items={tempItems} 
                editItem={onEditClick}
                deleteItem={onDeleteClick}
            />
        </div>
    );
};