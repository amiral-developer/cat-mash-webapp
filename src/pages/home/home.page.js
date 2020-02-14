import { default as React, useState } from 'react';
import { Link } from 'react-router-dom';
import Cat from '../../components/cat/cat.component';
import catsService from '../../services/cats.service';
import './home.page.css';

/**
 * Returns the array in parameters shuffled
 */
const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
};

function Home() {

    const [cats, setCats] = useState(shuffle(catsService.cats));

    const [firstFighterCat, setFirstFighterCat] = useState(cats[0]);
    const [secondFighterCat, setSecondFighterCat] = useState(cats[1]);

    const vote = id => {
        catsService.vote(id);

        shuffle(cats);

        setFirstFighterCat(cats[0]);
        setSecondFighterCat(cats[1]);
    };

    return (
        <div className="app">
            <header>
                Clique sur le chat le plus mignon ;)
             </header>
            <div>
                <div className="cats-container">
                    <Cat url={firstFighterCat.url} click={vote.bind(this, firstFighterCat.id)} />
                    <Cat url={secondFighterCat.url} click={vote.bind(this, secondFighterCat.id)} />
                </div>
            </div>
            <Link to="/ranking">Classement</Link>
        </div>
    );
}

export default Home;
