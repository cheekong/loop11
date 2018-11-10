import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import VideoShareModal from '../../components/Modal/VideoShareModal/VideoShareModal';
import TopBar from '../../components/Notification/TopBar';
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
        message: '',
        success: false,
        showTopBar: false,
        videoDetails: {
            description: 'Projects0001 Report / Task 2 / ',
            participants: 4,
            start: '2:30',
            end: '2:30'
        }
    }

    showModal(){
        this.setState({
            showModal: true
        })
    }

    closeModal(){
        this.setState({
            showModal: false
        })
    }


    handleChange(name){
        this.setState({
            selectedChannel: name
        });
    }

    closeTopBar(){
        this.setState({
            showTopBar: false
        });
    }

    handleSubmit(){
        api.shareToChannel(this.state.selectedChannel)
        .then(res => {
            if(res.status === 200 && res.data.statusCode === 200){
                this.setState({
                    success: true, 
                    showModal: false,
                    selectedChannel: 'select',
                    error: false,
                    message: 'Video clip shared with Slack!',
                    showTopBar: true
                });
            } else if (res.status === 200 && res.data.statusCode === 404){
                this.setState({
                    error: true, 
                    message: res.data.body.error + '. Please try another option.',
                    success: false,
                    selectedChannel: 'select',
                    showTopBar: true
                });
            }
        })
        .catch( err => {
            alert('Fatal error');
        })
    }

    componentDidMount(){
        api.getChannelList()
        .then(res => {
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
        return(
            <div>
                <TopBar 
                    onClick={() => this.closeTopBar()}
                    show={this.state.showTopBar}
                    error={this.state.error}
                    message={this.state.message}/>
                <VideoShareModal 
                    description={this.state.videoDetails.description}
                    participants={this.state.videoDetails.participants}
                    start={this.state.videoDetails.start}
                    end={this.state.videoDetails.end}
                    show={this.state.showModal}
                    title=''
                    subtitle='Select a slack channel'
                    options={this.state.channelList}
                    onClose={()=>this.closeModal()}
                    onChange={(name) => this.handleChange(name)}
                    onSubmit={() => this.handleSubmit()}
                    disabled={this.state.selectedChannel === 'select'}/>
                <header>
                    <span className='loop11__logo'>
                        <img src='res/logo/loop-11-logo-green-copy.svg' alt='palcare logo'/>
                    </span>
                </header>
                <div className='cta__center'>
                    <Button label='Click' onClick={()=>this.showModal()}/>
                </div>
                
            </div>
        )
    }
}

export default Landing;