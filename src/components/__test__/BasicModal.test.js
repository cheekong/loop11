import React from 'react';
import { shallow } from '../../enzyme';

import BasicModal from '../Modal/BasicModal/BasicModal';

describe('Basic modal tests', () => {
    it('Modal not visible', () => {
        const show = false
        const title ='TEST MODAL'
        const child = 'TEST';
        const onClose = () => {};

        const wrapper = shallow(
            <BasicModal 
                show={show}
                title={title}
                onClose={() => onClose()}>
                {child}
            </BasicModal>
        );
        expect(wrapper.find('.basic-modal__heading').text()).toEqual(title);
        expect(wrapper.find('.inactive')).toHaveLength(1);
    })

    it('renders modal', () => {
        const show = false
        const title ='TEST MODAL'
        const onClose = () => {};

        const wrapper = shallow(
            <BasicModal 
                show={show}
                title={title}
                onClose={() => onClose()}>
                <p>TEST</p>
            </BasicModal>
        );
        wrapper.setState({ show: true, isOpen: true });
        expect(wrapper.find('.inactive')).toHaveLength(0);
    })
})