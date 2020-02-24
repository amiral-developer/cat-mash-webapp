import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { default as React } from 'react';
import { CATS } from '../../assets/data/cats';
import Home from './home.page';

configure({ adapter: new Adapter() });


describe('Component HomePage', () => {
    // Init wrapper with span to have wrapper types
    // TODO Look for best solution 
    let wrapper = shallow(<span></span>);

    beforeEach(() => {
        wrapper = shallow(<Home cats={CATS} />)
        wrapper.setProps({ cats: CATS });
    });

    test('should render good votes number', () => {
        // sum 1..18 = 171 check cats mock
        expect(wrapper.find('.votes-count').text()).toEqual('171 votes');
    });

    // tests|code needed work
    test.skip('should increment votes counter on cat click', () => {
        // Check  one link on the page
        expect(wrapper.find('.vote-container').length).toEqual(2);
        wrapper.find('.vote-container').first().simulate('click');
        expect(wrapper.find('.votes-count').text()).toEqual('172 votes');
    });


    // tests|code needed work
    test.skip('should change randomly cats', () => {

        // Check  one link on the page
        expect(wrapper.find('Cat').length).toEqual(2);

        const catUrl1 = wrapper.find('Cat').at(0).prop('url');
        const catUrl2 = wrapper.find('Cat').at(1).prop('url');

        wrapper.find('Cat').at(0).simulate('click');

        expect(wrapper.find('Cat').at(0).prop('url') !== catUrl1).toEqual(true);
        expect(wrapper.find('Cat').at(1).prop('url') !== catUrl2).toEqual(true);
    });

});