import React from 'react';
import './rank.component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Rank = props => {

    return (
        <div className="rank">
            <div className="left-container">
                <p className="cat-rank">{props.rank}</p>
                <img className="cat-image" alt="" src={props.cat.url} />
                <p className="cat-id">{props.cat.id} </p>
            </div>
            <div className="cat-score-container right-caontainer">
                <p className="cat-score">{props.cat.score}</p>
                <FontAwesomeIcon icon={faPaw} color="white" />
            </div>
        </div>
    );
}

Rank.propsType = {
    rank: PropTypes.number,
    cat: PropTypes.object.isRequired,
};

export default Rank;