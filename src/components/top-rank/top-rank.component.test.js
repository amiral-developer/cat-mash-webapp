import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { CATS } from '../../assets/data/cats';
import TopRank from '../top-rank/top-rank.component';

configure({ adapter: new Adapter() });

describe('Component TopRank', () => {
    let wrapper = shallow(<div></div>);

    beforeEach(() => {
        wrapper = shallow(<TopRank cat={{ id: '' }} rank={-1} />);
    });

    it('should render first rank', () => {
        wrapper.setProps({ cat: CATS[0], rank: 1 });
        expect(wrapper.find('span').hasClass('cat-rank-1')).toEqual(true);
        expect(wrapper.find('.cat-image').prop('src')).toEqual(CATS[0].url);
        expect(wrapper.find('.cat-score').text()).toEqual(`${CATS[0].score}`);
    });
});
