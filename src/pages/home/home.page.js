import { default as React, useState } from 'react';
import { CATS } from '../../data/cats';
import './home.page.css';
import Cat from '../../components/cat/cat.component';

const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
};

function Home() {

    const [cats, setCats] = useState(shuffle(CATS));

    const [firstFighterCat, setFirstFighterCat] = useState(cats[0]);
    const [secondFighterCat, setSecondFighterCat] = useState(cats[1]);

    const vote = id => {
        console.log(id);

        const cat = cats.find(lCat => lCat.id === id);

        if (cat) {
            if (cat.score)
                cat.score = 1;
            else cat.score++;
        }

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
        </div>
    );
}

export default Home;
