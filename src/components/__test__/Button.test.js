import React from 'react';
import { shallow } from '../../enzyme';

import Button from '../UI/Button/Button';

describe('Button tests', () => {
    it('renders regular button', () => {
        const label = 'Success';
        const onClick = () => {};

        const wrapper = shallow(
            <Button 
                label={label}
                onClick={()=>onClick()}/>
        );

        expect(wrapper.find('input').props()['value']).toEqual(label);
        expect(wrapper.find('.regular')).toHaveLength(1);
    })

    it('renders modal button', () => {
        const modifier = 'modal';
        const label = 'Share with Slack';
        const onClick = () => {};
        const disabled = true;

        const wrapper = shallow(
            <Button 
                modifier={modifier}
                label={label}
                disabled={disabled}
                onClick={() => onClick()}/>
        );

        expect(wrapper.find('input').props()['value']).toEqual(label);
        expect(wrapper.find('.modal')).toHaveLength(1);
    })

    it('renders disabled regular button', () => {
        const label = 'Success';
        const onClick = () => {};
        const disabled = true;

        const wrapper = shallow(
            <Button 
                label={label}
                onClick={()=>onClick()}
                disabled={disabled}/>
        );

        expect(wrapper.find('input').props()['value']).toEqual(label);
        expect(wrapper.find('.regular')).toHaveLength(1);
        expect(wrapper.find('.button--inactive')).toHaveLength(1);
    })

    it('renders disabled modal button', () => {
        const modifier = 'modal';
        const label = 'Share with Slack';
        const onClick = () => {};
        const disabled = true;

        const wrapper = shallow(
            <Button 
                modifier={modifier}
                label={label}
                disabled={disabled}
                onClick={() => onClick()}/>
        );

        expect(wrapper.find('input').props()['value']).toEqual(label);
        expect(wrapper.find('.modal')).toHaveLength(1);
        expect(wrapper.find('.button--inactive')).toHaveLength(1);
    })
})
