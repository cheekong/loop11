import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/Button/Button';
import BasicModal from './BasicModal/BasicModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Modal.css';

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
        let options = [];
        if(this.props.options.length){
            options = this.props.options.map((optionItem, idx) => {
console.log('optionItem',optionItem);
                return(
                    <option key={optionItem.name + idx} value={optionItem.name}>#{optionItem.label}</option>
                )
            })
        }

        return (
            <BasicModal
                show={this.props.show}
                title={this.props.title}
                onClick={this.props.onClick}
                onSubmit={() => this.handleSubmit()}
                reverse={this.state.reserve}>
                <div className='share-vid-modal__description'>
                    <h3>{this.props.subtitle}</h3>
                    <p >To Share this clip, add email addresses separated by commas, then click 'Send'.</p>
                    <p>
                        <span className='video-clip-description'>Projects0001 Report / Task 2 / </span> 
                        <span className='participant-description'>Partcipants 4</span>
                        <br />
                        
                        <span className='font-awesome-icon'><FontAwesomeIcon icon="video" /></span>
                        <span className='participant-description'>Start:</span> 
                        <span className='video-clip-description'>2:30    </span>
                        <span className='participant-description'>End</span> 
                        <span className='video-clip-description'> 2:30</span>
                    </p>
                </div>
                <div className='share-vid-modal__cta'>
                    <select className='select'
                        onChange={(event) => this.props.onChange(event.target.value)}>
                        <option value='select'>Select</option>
                        {options}
                    </select>
                    <Button 
                        modifier='modal'
                        label='Share with Slack'
                        disabled={this.props.disabled}
                        onClick={() => this.handleSubmit()}/>
                </div>
            </BasicModal>
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