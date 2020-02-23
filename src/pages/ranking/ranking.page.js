import { default as React, useState } from 'react';
import Cat from '../../components/cat/cat.component';
import TopRanking from '../../components/top-ranking/top-ranking.component';
import catsService from '../../services/cats.service';
import './ranking.page.css';
import Rank from '../../components/rank/rank.component';

const Ranking = props => {
    const prepareCats = () => {
        const catsWithScore = catsService.cats.filter(cat => cat.score !== undefined);
        const catsSorted = catsWithScore.sort((cat1, cat2) => cat2.score - cat1.score);

        return catsSorted;
    }

    const [cats, setCats] = useState(prepareCats());

    const renderRanksNotInTop = () => {
        const catsNotInTop = cats.filter((cat, i) => i > 2);

        return catsNotInTop.map((cat, i) => (
            <Rank key={i} rank={i + 4} cat={cat}></Rank>
        ));
    }

    return (
        <div className="ranking-page">
            <div className="top-ranks">
                <TopRanking cats={cats}></TopRanking>
            </div>
            <div className="other-ranks">
                {renderRanksNotInTop()}
            </div>
        </div>
    );
};

export default Ranking;