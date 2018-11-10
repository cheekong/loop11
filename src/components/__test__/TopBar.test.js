import React from 'react';
import { shallow } from '../../enzyme';

import TopBar from '../Notification/TopBar';

describe('TopBar tests', () => {
    it('renders success message string', () => {
        const message = 'Success';
        const error = false;
        const onClick = () => {};
        const show = true;

        const wrapper = shallow(<TopBar message={message} error={error} show={show} onClick={onClick}/>)

        expect(wrapper.find('.top-bar__message').text()).toEqual(message);
        expect(wrapper.find('.top-bar__message')).toHaveLength(1);
        expect(wrapper.find('.top-bar__close')).toBeDefined();
        expect(wrapper.find('.success')).toHaveLength(1);
    })

    it('renders error message string', () => {
        const message = 'Error';
        const error = true;
        const onClick = () => {};
        const show = true;

        const wrapper = shallow(<TopBar message={message} error={error} show={show} onClick={() => onClick()}/>)

        expect(wrapper.find('.top-bar__message').text()).toEqual(message);
        expect(wrapper.find('.top-bar__message')).toHaveLength(1);
        expect(wrapper.find('.error')).toHaveLength(1);
    })
})
