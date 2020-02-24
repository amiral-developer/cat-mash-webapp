import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { CATS } from '../../assets/data/cats';
import Cat from './cat.component';

configure({ adapter: new Adapter() });

describe('Component Cat', () => {
    let wrapper = shallow(<div></div>);
    let randomCat;

    beforeEach(() => {
        wrapper = shallow(<Cat cat={{ id: '' }} />);
        randomCat = CATS[Math.floor(Math.random() * CATS.length)];
        wrapper.setProps({ url: randomCat.url });
    });

    it('should render the good cat', () => {
        expect(wrapper.find('.cat-image').prop('src')).toEqual(randomCat.url);
    });
});
