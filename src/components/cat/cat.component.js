import React from 'react';
import './cat.component.css';
import PropTypes from 'prop-types';

const Cat = (props) => {

    return (
        <div onClick={props.click} className="cat-container">
            <img className="cat-image" alt="" src={props.url} />
        </div>
    );
}

Cat.propsType = {
    click: PropTypes.func,
};

export default Cat;