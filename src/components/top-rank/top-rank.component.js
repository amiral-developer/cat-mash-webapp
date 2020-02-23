import React from 'react';
import './top-rank.component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const TopRank = props => {

    return (
        <div className="top-rank">
            <p className="cat-id">{props.cat.id.toUpperCase()} </p>
            <div className="cat-image-container">
                <img className="cat-image" alt="" src={props.cat.url} />
                <span className={`cat-rank cat-rank-${props.rank}`}>{props.rank}</span>
            </div>
            <div className="cat-score-container">
                <p className="cat-score">{props.cat.score}</p>
                <FontAwesomeIcon icon={faPaw} color="white" />
            </div>
        </div>
    );
}

TopRank.propsType = {
    rank: PropTypes.number,
    cat: PropTypes.object.isRequired,
};

export default TopRank;