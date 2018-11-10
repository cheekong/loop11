import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './BasicModal.css';

class Modal extends Component {

    state = {
        show: false,
        isOpen: false,
        reserve: false
    }

    closeModal(){
        this.props.onClose();
        this.setState({show: false})
    }

    componentDidUpdate(prevProps, prevState){
        /* 
            the idea of the basic modal is to be as abstract and stand alone possible
            as it has it's own way of flow for closing and appearing i.e fade in and fade out.
        */
        if(this.props.show && !prevProps.show){
            this.setState({
                show: true, 
                isOpen: true
            });
        }

        if(!this.props.show && prevProps.show){
            this.setState({show: false});
        }

        if(prevState.show && !this.state.show){
            this.setState({reserve: true});
            setTimeout(()=>this.setState({
                isOpen: false, 
                reserve: false
                }), 
                200
            );
        }
    }

    render(){
        let modalClassName = ['basic-modal'];
        if(this.state.reserve){
            modalClassName.push('reserve');
        }
        if(!this.state.isOpen){
            modalClassName.push('inactive');
        }
        modalClassName = modalClassName.join(' ');

        return (
            <div className={modalClassName}>
                <div className='basic-modal__window'>
                    <div className='basic-modal__container '>
                        <div className='basic-modal__header'>
                            <h2 className='basic-modal__heading'>{this.props.title}</h2>
                            <p className='basic-modal__cancel' 
                                onClick={() => this.closeModal()}>
                                <FontAwesomeIcon icon="times" />
                            </p>
                        </div>
                        <div className='basic-modal__body'>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
}

export default Modal;