import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './DropBar.css';

const DropBar = ( props ) => {

    return(
        <div className='dropbar'>
            <div className='dropbar__success'>
                <p className='dropbar__success__body'>
                    <span className='dropbar__icon'><FontAwesomeIcon icon="check-circle" /></span>
                    <span className='dropbar__message'>Video clip shared with Slack!</span>
                    <span className='dropbar__close' onClick={props.onClick}><FontAwesomeIcon icon="times" /></span>
                </p>
            </div>
        </div>
        
    )
}

export default DropBar;