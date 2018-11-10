import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button/Button';
import BasicModal from '../BasicModal/BasicModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './VideoShareModal.css';

class Modal extends Component {

    state = {
        show: false
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.onSubmit();
    }

    componentDidUpdate(prevProps){
        if(!prevProps.show && this.props.show){
            this.setState({show: true});
        }

        if(prevProps.show && !this.props.show){
            this.setState({show: false});
        }
    }

    render(){
        let options = [];
        if(this.props.options.length){
            options = this.props.options.map((optionItem, idx) => {
                return(
                    <option 
                        key={optionItem.name + idx} 
                        value={optionItem.name}>
                        #{optionItem.label}
                    </option>
                )
            })
        }

        return (
            <BasicModal
                show={this.state.show}
                title='Share video clip'
                onClose={this.props.onClose}>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div className='video-share-modal__description'>
                        <h3>Select a slack channel</h3>
                        <p>To Share this clip, add email addresses separated by commas, then click 'Send'.</p>
                        <p>
                            <span className='video-clip-description'>{this.props.description}</span> 
                            <span className='participant-description'>Partcipants {this.props.participants}</span>
                            <br />
                            <span className='font-awesome-icon'><FontAwesomeIcon icon="video" /></span>
                            <span className='start-label'>Start</span>
                            <span className='start-time'>{this.props.start}</span>   
                            <span className='end-label'>End</span> 
                            <span className='end-time'>{this.props.end}</span>
                        </p>
                    </div>
                    <div className='video-share-modal__cta'>
                        <select className='select'
                            value={this.props.value}
                            onChange={(event) => this.props.onChange(event.target.value)}>
                            <option value='select'>Select</option>
                            {options}
                        </select>
                        <Button 
                            modifier='modal'
                            label='Share with Slack'
                            disabled={this.props.disabled} />
                    </div>
                </form>
            </BasicModal>
        );
       
    }
}

Modal.propTypes = {
    disabled: PropTypes.bool.isRequired,
    show: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    description: PropTypes.string.isRequired,
    participants: PropTypes.number.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    options:  PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Modal;