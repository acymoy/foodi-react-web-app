import React from "react";
import { Link } from "react-router-dom";


const ListTile = (listObject) => {
    const list = listObject.list

    return (
        <div className="card mb-2">
            <Link to={`${list._id}`} className='card-body row'>
                <div className='col-md-10'>
                    <div className='card-title'>
                        <h4>{list.name}</h4>
                    </div>
                    <p className='card-subtitle text-muted'>{list.length} items</p>
                    <p className='card-text'>{list.description}</p>
                </div>
                <div className='col-md-2 d-flex align-items-center justify-content-end'>
                    <i class="bi bi-arrow-right"></i>
                </div>
            </Link>
        </div>
    )
}

export default ListTile;