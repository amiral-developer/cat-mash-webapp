import React from 'react';
import './top-ranking.component.css';
import TopRank from '../top-rank/top-rank.component';
import PropTypes from 'prop-types';

const TopRanking = props => {

    return (
        <div className="top-ranking">
            <TopRank className="mister" rank={1} cat={props.cats[0]}></TopRank>
            <div className="dauphins">
                <TopRank rank={2} cat={props.cats[1]}></TopRank>
                <TopRank rank={3} cat={props.cats[2]}></TopRank>
            </div>
        </div>
    );
}

TopRanking.propsType = {
    cats: PropTypes.arrayOf(PropTypes.object),
};

export default TopRanking;