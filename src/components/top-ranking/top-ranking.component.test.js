import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { CATS } from '../../assets/data/cats';
import TopRank from '../top-rank/top-rank.component';
import TopRanking from './top-ranking.component';

configure({ adapter: new Adapter() });

describe('Component TopRanking', () => {
    let wrapper = shallow(<div></div>);

    beforeEach(() => {
        wrapper = shallow(<TopRanking cats={[]} />);
        wrapper.setProps({ cats: CATS });
    });

    it('should render 3 first cats', () => {
        expect(wrapper.find(TopRank)).toHaveLength(3);
        expect(wrapper.find(TopRank).at(0).prop('cat')).toEqual(CATS[0]);
        expect(wrapper.find(TopRank).at(1).prop('cat')).toEqual(CATS[1]);
        expect(wrapper.find(TopRank).at(2).prop('cat')).toEqual(CATS[2]);
    });
});