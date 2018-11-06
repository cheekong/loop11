import React from 'react';
import Button from '../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Modal.css';

const Modal = (props) => {
console.log('props',props);
    let options = [];
    if(props.options.length){
        options = props.options.map((optionItem, idx) => {
            return(
                <option key={optionItem.name + idx} value={optionItem.name}>#{optionItem.label}</option>
            )
        })
    }

    return(
        <div className='modal'>
            <div className='modal__window'>
                <div className='modal__header'>
                    <div className='modal__text share__video__clip'>
                        Share video clip
                    </div>
                    <div className='modal__cancel'>
                        <p className='action__cancel' onClick={props.onClick}><FontAwesomeIcon icon="times" /></p>
                    </div>
                    <div style={{clear:'both'}} />
                </div>
                <div className='modal__body'>
                    <p className='modal__text modal__title'>
                        Select a slack channel
                    </p>
                    <p className='modal__text modal__description'>
                        To Share this clip, add email addresses separated by commas, then click 'Send'.
                    </p>
                    <p className='modal__text'>
                        <span className='video__clip__description'>Projects0001 Report / Task 2 / </span> 
                        <span className='participant__description'>Partcipants 4</span>
                        <br />
                        
                        <span className='font__awesome__icon'><FontAwesomeIcon icon="video" /></span><span className='participant__description'>Start:</span> <span className='video__clip__description'>2:30    </span>
                        <span className='participant__description'>End</span> <span className='video__clip__description'> 2:30</span>
                    </p>
                    <div className='modal__cta'>
                        <p>
                        <select className='select'
                            onChange={(event) => props.onChange(event.target.value)}>
                            <option value='select'>Select</option>]
                            {options}
                        </select>
                        </p>
                        <span>
                            <Button 
                                modifier='modal'
                                label='Share with Slack'
                                disabled={props.disabled}
                                onClick={props.onSubmit}/>
                        </span>
                        
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Modal;