import { default as React, useState } from 'react';
import { Link } from 'react-router-dom';
import Cat from '../../components/cat/cat.component';
import catsService from '../../services/cats.service';
import './home.page.css';
import appLogo from '../../assets/image/cap-mash-logo.png';

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

const Home = props => {
    // Using props for tests 
    // TODO Look for best solution
    if (props.cats) catsService.cats = props.cats;

    const [cats, setCats] = useState(shuffle(catsService.cats));

    const countVotes = () => cats.reduce((acc, cat) => acc + (cat.score ? cat.score : 0), 0);

    const [votesCounter, setVotesCounter] = useState(countVotes());

    const [firstFighterCat, setFirstFighterCat] = useState(cats[0]);
    const [secondFighterCat, setSecondFighterCat] = useState(cats[1]);

    const vote = async id => {
        await catsService.vote(id);

        setCats(catsService.cats)
        shuffle(cats);

        setFirstFighterCat(cats[0]);
        setSecondFighterCat(cats[1]);

        setVotesCounter(countVotes)
    };

    return (
        <div className="home-page">
            <div className="app-logo-container">
                <div className="app-name">CAT MASH</div>
                <img className="app-logo" src={appLogo} alt="" />
            </div>
            <div className="votes-container">
                <div className="vote-container left-vote">
                    <Cat url={firstFighterCat.url} click={vote.bind(this, firstFighterCat.id)} />
                </div>
                <div className="vote-container right-vote">
                    <Cat url={secondFighterCat.url} click={vote.bind(this, secondFighterCat.id)} />
                </div>
            </div>
            <div className="ranking-access">
                <Link to="/ranking">Voir les plus beaux chats</Link>
                <div className="votes-count">{votesCounter} votes</div>
            </div>
        </div>
    );
};

export default Home;
