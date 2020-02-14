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
                <tr key={key}>
                    <th scope="row">{key + 1}</th>
                    <td><Cat url={cat.url} /></td>
                    <td>{cat.score}</td>
                </tr>
            )
        );
    }

    return (
        <div className="ranking-page">
            <header>
                Classement des chats les plus mignons !
             </header>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Rang</th>
                        <th scope="col">Chat</th>
                        <th scope="col">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {renderCats()}
                </tbody>
            </table>
            <Link to="/">Retour aux votes</Link>
        </div>
    );
}

export default Ranking;