import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TopRanking from './top-ranking.component';
import { CATS } from '../../assets/data/cats';
import TopRank from '../top-rank/top-rank.component';

configure({ adapter: new Adapter() });

describe('Component TopRanking', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<TopRanking cats={[]} />);
        wrapper.setProps({ cats: CATS });
    });

    it('should render 3 TopRank components', () => {
        expect(wrapper.find(TopRank)).toHaveLength(3);
    });
});