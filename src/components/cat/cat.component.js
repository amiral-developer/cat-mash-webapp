import React from 'react';
import './cat.component.css';

const Cat = (props) => {

    return (
        <div onClick={props.click} className="cat-container">
            <img className="cat-image" alt="" src={props.url} />
        </div>
    );
}

export default Cat;