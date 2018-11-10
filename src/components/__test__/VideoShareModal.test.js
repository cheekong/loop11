import React from 'react';
import { shallow } from '../../enzyme';

import VideoShareModal from '../Modal/VideoShareModal/VideoShareModal';

describe('Button tests', () => {
    it('renders video share modal', () => {
        const show=true;
        const options=[{value:'#random', label: 'Random'}, {value:'#test', label: 'Test'}];
        const onClose=()=>{};
        const onChange=()=>{};
        const onSubmit=()=>{};
        const disabled=true;
        const description = 'test description';
        const participants = 4;
        const start = '2:30';
        const end = '2:30';

        const wrapper = shallow(
            <VideoShareModal 
                show={show}
                end={end}
                start={start}
                description={description}
                participants={participants}
                options={options}
                onClose={()=>onClose()}
                onChange={()=>onChange()}
                onSubmit={()=>onSubmit()}
                disabled={disabled}/>
        );
        expect(wrapper.find('.video-clip-description').text()).toEqual(description);
        expect(wrapper.find('.participant-description').text()).toContain(participants);
        expect(wrapper.find('.start-time').text()).toEqual(start);
        expect(wrapper.find('.end-time').text()).toEqual(end);

        
        //expect(wrapper.find('.inactive')).toHaveLength(1);
    })
})
