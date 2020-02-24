import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createWaitForElement } from 'enzyme-wait';
import { default as React } from 'react';
import App from './App';

configure({ adapter: new Adapter() });


describe('Component App', () => {
    // Init wrapper with span to have wrapper types
    // TODO Look for best solution 
    let wrapper = shallow(<span></span>);
    let waitForHomePage;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    test('it should display loading', () => {
        expect(wrapper.find('.loading').length).toEqual(1);
    });

    // Need work to understand how cxorrectly wait an element
    test.skip('it should load cats and display home page', async () => {
        waitForHomePage = createWaitForElement('.root');
        const wrapperReady = await waitForHomePage(wrapper);

        expect(wrapperReady.find('.home-page').length).toEqual(1);
    });


});