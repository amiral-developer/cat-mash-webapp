import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { CATS } from '../../assets/data/cats';
import Rank from './rank.component';

configure({ adapter: new Adapter() });

describe('Component Rank', () => {
    let wrapper = shallow(<div></div>);
    let randomCat;

    beforeEach(() => {
        wrapper = shallow(<Rank cat={{ id: '' }} rank={-1} />);
        randomCat = CATS[Math.floor(Math.random() * CATS.length)];
    });

    it('should render the good cat', () => {
        wrapper.setProps({ cat: randomCat, rank: randomCat.score });
        expect(wrapper.find('.cat-image').prop('src')).toEqual(randomCat.url);
        expect(wrapper.find('.cat-score').text()).toEqual(`${randomCat.score}`);
    });
});
