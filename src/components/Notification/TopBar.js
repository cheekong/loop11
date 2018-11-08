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

            let className = ['topbar'];
            if(this.state.reserve){
                className.push('reserve');
            }
            className = className.join(' ');

            let statusClassName = ['topbar__content'];
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
                        <p className='topbar__body'>
                            <span className='topbar__icon'>{icon}</span>
                            <span className='topbar__message'>{this.props.message}</span>
                            <span className='topbar__close' onClick={() => this.handleClose()}><FontAwesomeIcon icon="times" /></span>
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