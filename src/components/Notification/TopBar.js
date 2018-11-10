import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './TopBar.css';

class TopBar extends Component{
    state = {
        show: false,
        reserve: false
    }

    handleClose(){
        this.setState({reserve: true});
        setTimeout(() => {
            this.props.onClick();
            this.setState({reserve: false})
        }, 300);
    }

    render(){
        let topBar = null;
        if(this.props.show){

            let className = ['top-bar'];
            if(this.state.reserve){
                className.push('reserve');
            }
            className = className.join(' ');

            let statusClassName = ['top-bar__content'];
            let icon = <FontAwesomeIcon icon="check-circle" />;;
            if(this.props.error){
                statusClassName.push('error');
                icon = <FontAwesomeIcon icon="times-circle" />
            } else {
                statusClassName.push('success');
            }
            statusClassName = statusClassName.join(' ');

            topBar = (
                <div className={className}>
                    <div className={statusClassName}>
                        <p className='top-bar__body'>
                            <span className='top-bar__icon'>{icon}</span>
                            <span className='top-bar__message'>{this.props.message}</span>
                            <span className='top-bar__close' onClick={() => this.handleClose()}><FontAwesomeIcon icon="times" /></span>
                        </p>
                    </div>
                </div>
            )
        }
        return topBar;
    }
}

TopBar.propTypes = {
    show: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default TopBar;