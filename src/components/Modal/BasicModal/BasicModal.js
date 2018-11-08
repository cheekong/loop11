import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './BasicModal.css';

class Modal extends Component {

    state = {
        reserve: false
    }

    reserveModal(){
        this.setState({reserve: true});
        setTimeout(()=>{
            this.props.onClick();
            this.setState({
                reserve: false
            })
        }, 300);
    }

    handleSubmit(){
        this.setState({reserve: true});
        setTimeout(()=>{
            this.props.onSubmit();
            this.setState({reserve: false});
        }, 300);
    }

    render(){
        let modalClassName = ['basic-modal'];
        
        if(this.state.reserve || this.props.reserve){
            modalClassName.push('reserve');
        }
        
        if(!this.props.show){
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
                                onClick={() => this.reserveModal()}>
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
    disabled: PropTypes.bool.isRequired,
    show: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    options:  PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Modal;