/*
* Created by: :component
* Date: 2020-09-10 12:00:23
*/

import React from "react";

const MakeList = (props) => {

    return props.items.map(items => 
        <div key={items.id} className="items">
            <p className="itemContent">
                {items.content}
            </p>
            <button onClick={() => props.editItem()}>Edit</button>
            <button onClick={() => props.deleteItem()}>Delete</button>
        </div>
    )
}

export const Item = props => {

    let items = props.items;


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
                items={items} 
                editItem={onEditClick}
                deleteItem={onDeleteClick}
            />
        </div>
    );
};