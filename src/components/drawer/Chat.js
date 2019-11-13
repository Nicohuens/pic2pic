import React, { Component } from 'react';
import InputMessage from './InputMessage';
import AnswerBoard from './AnswerBoard';
import './Chat.css';

class Chat extends Component {
    state = {
        currentInput: '',
        isWriting: false,
        messages: []
    }

    handleChange = (event) => {
        this.setState({ isWriting: true })
        this.setState({ 
            currentInput: event.target.value
        });
    }

    handleSubmit = (event, messageToAdd) => {
        this.setState({ isWriting: false })
        if (this.state.currentInput !== '') {
             let newMessages = this.getNewMessages();
             this.setState({
                 messages: newMessages
             })
             this.setState({currentInput: ''})
            }
            event.preventDefault();   
    }

    getNewMessages = () => {
        let newDate = new Date().toLocaleString();
        let from = this.whoTalk()
        let existingMessages  = this.state.messages;
        let newMessage = { content: from === "Benoit :" ? this.state.currentInput: this.state.currentInput.substring(0, this.state.currentInput.length - 5), 
                            sender: from, 
                            date: "On " + newDate }
        existingMessages.push(newMessage)

        return existingMessages;
    }


    whoTalk = () => {
        var lastChar = this.state.currentInput.slice(-5);
        console.log(lastChar)
        if(lastChar==="#else") {
            return "someone else"
        } else {
            return "Benoit :"
        }
    }
  

    render () {
    
        return (
        <div>
            <div className="chat-zone">   
                <AnswerBoard
                    messages={this.state.messages}>
                </AnswerBoard>
                { this.state.isWriting ? "" : ""} 
            </div>
            <div>
                <InputMessage type="text" 
                            addMessage={this.handleChange}
                            confirmMessage={this.handleSubmit}
                            currentMessage={this.state.currentInput}>
                </InputMessage>
        </div>
        </div>
        )   
    }
}

export default Chat;
