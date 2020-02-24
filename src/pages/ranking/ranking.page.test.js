import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { default as React } from 'react';
import { CATS } from '../../assets/data/cats';
import Ranking from './ranking.page';

configure({ adapter: new Adapter() });


describe('Component RankingPage', () => {
    // Init wrapper with span to have wrapper types
    // TODO Look for best solution 
    let wrapper = shallow(<span></span>);

    beforeEach(() => {
        wrapper = shallow(<Ranking cats={CATS} />)
        wrapper.setProps({ cats: CATS });
    });

    test('should render top ranking and other ranks', () => {
        expect(wrapper.find('.top-ranks').length).toEqual(1);
        expect(wrapper.find('.other-ranks').length).toEqual(1);
    });


});