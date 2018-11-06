import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/Modal/Modal';
import DropBar from '../../components/DropBar/DropBar';
import * as api from '../../utilities/api';
//import Logo from 'res/logo/loop-11-logo-green-copy.svg';
import './Dashboard.css';

class Landing extends Component {
    state = {
        showModal: false,
        touched: false,
        channelList: [],
        selectedChannel: 'select',
        error: false,
        errorMessage: null,
        success: false
    }

    toggleModal(){
        this.setState({
            showModal: !this.state.showModal
        })
    }

    handleChange(name){
        console.log('name', name);
        this.setState({
            selectedChannel: name
        });
    }

    handleSubmit(){
        api.shareToChannel(this.state.selectedChannel)
        .then(res => {
            if(res.status === 200 && res.data.statusCode === 200){
                this.setState({
                    success: true, 
                    showModal: false,
                    selectedChannel: 'select'
                });
            } else if (res.status === 200 && res.data.statusCode === 404){
                this.setState({error: true, errorMessage: res.data.body.error});
            }
            console.log('res',res);
        })
        .catch( err => {
            console.log('err',err);
            alert('Fatal error');

        })
    }

    componentDidMount(){
        api.getChannelList()
        .then(res => {
            console.log('res',res);
            if(res.status === 200 && res.data.statusCode === 200){
                this.setState({channelList: res.data.channels})
            } else {
                alert('Unexpected error has occured.')
            }
        })
        .catch(err => {
            alert('Fatal error has occured.');
        });
    }

    render(){

        let modal = null;
        if(this.state.showModal){
            modal = (
                <Modal 
                    options={this.state.channelList}
                    onClick={()=>this.toggleModal()}
                    onChange={(name) => this.handleChange(name)}
                    onSubmit={() => this.handleSubmit()}
                    disabled={this.state.selectedChannel === 'select'}/>
            );
        }
        return(
            <div>
                <DropBar />
                {modal}
                <header>
                    <span className='loop11__logo'>
                        <img src='res/logo/loop-11-logo-green-copy.svg' alt='palcare logo'/>
                    </span>
                </header>
                <div className='cta__center'>
                    <Button label='Click' onClick={()=>this.toggleModal()}/>
                </div>
                
            </div>
        )
    }
}

export default Landing;