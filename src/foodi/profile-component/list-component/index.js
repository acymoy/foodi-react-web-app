import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import exampleLists from '../../data/example-list.json'

// Component imports
import ListTile from "./list-tile";

const List = () => {
    const listArray = exampleLists

    return (
        <div>
            <h3>Lists ({listArray.length})</h3>
            {listArray.map(x => <ListTile key={x._id} list={x} />)}
        </div>
    )
}

export default List;