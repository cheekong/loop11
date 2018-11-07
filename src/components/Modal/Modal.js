import React, { Component } from 'react';
import Button from '../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as api from '../../utilities/api';
import './Modal.css';

class Modal extends Component {

    state = {
        show: false,
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
            this.props.onClick()
            this.props.onSubmit();
            this.setState({
                reserve: false
            })
        }, 100);
    }

    render(){
        let options = [];
        if(this.props.options.length){
            options = this.props.options.map((optionItem, idx) => {
                return(
                    <option key={optionItem.name + idx} value={optionItem.name}>#{optionItem.label}</option>
                )
            })
        }
        let modal = null;
        if(this.props.show) {
            let modalClassName = ['backdrop'];
            if(this.state.reserve){
                modalClassName.push('reserve');
            }
            modalClassName = modalClassName.join(' ');
            modal = (
                <div className={modalClassName}>
                    <div className='modal'>
                        <div className='modal__container '>
                            <div className='modal__header'>
                                <h2 className='modal__heading'>Share video clip</h2>
                                <p className='modal__cancel' onClick={() => this.reserveModal()}><FontAwesomeIcon icon="times" /></p>
                            </div>
                            <div className='modal__body'>
                                <div className='modal__description'>
                                    <h3>Select a slack channel</h3>
                                    <p >
                                        To Share this clip, add email addresses separated by commas, then click 'Send'.
                                    </p>
                                    <p>
                                        <span className='video__clip__description'>Projects0001 Report / Task 2 / </span> 
                                        <span className='participant__description'>Partcipants 4</span>
                                        <br />
                                        
                                        <span className='font__awesome__icon'><FontAwesomeIcon icon="video" /></span><span className='participant__description'>Start:</span> <span className='video__clip__description'>2:30    </span>
                                        <span className='participant__description'>End</span> <span className='video__clip__description'> 2:30</span>
                                    </p>
                                </div>
                                <div className='modal__cta'>
                                    <select className='select'
                                        onChange={(event) => this.props.onChange(event.target.value)}>
                                        <option value='select'>Select</option>
                                        {options}
                                    </select>
                                    <span>
                                        <Button 
                                            modifier='modal'
                                            label='Share with Slack'
                                            disabled={this.props.disabled}
                                            onClick={() => this.handleSubmit()}/>
                                    </span>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            )
        }
        return modal;
    }
}

export default Modal;