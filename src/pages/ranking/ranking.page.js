import { default as React, useState } from 'react';
import { Link } from 'react-router-dom';
import Cat from '../../components/cat/cat.component';
import catsService from '../../services/cats.service';
import './ranking.page.css';

function Ranking() {
    const [cats, setCats] = useState(catsService.cats.sort((cat1, cat2) => cat2.score - cat1.score));

    const renderCats = () => {
        return cats.map((cat, key) =>
            (
                <div key={key} className="cat-ranking">
                    
                    <Cat url={cat.url} />
                    <div>{cat.score}</div>
                </div>
            )
        );
    }

    return (
        <div className="ranking-page">
            <header>
                Classement des chats les plus mignons !
             </header>
            <div>
                <div className="cats-container">
                    {renderCats()}
                </div>
                <Link to="/">Retour aux votes</Link>
            </div>
        </div>
    );
}

export default Ranking;