import React, { Component } from 'react';
import Modal from "react-modal";
import './App.css';
import axios from 'axios';

const appElement = document.getElementById('root');
Modal.setAppElement(appElement);

const isDev = process.env.NODE_ENV !== 'production';
// BORED API stuffs 
const BORED_API = isDev ? '/activity' : 'https://boredapi.com/activity';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      activity: '',
      error: null
    }
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);

  }
  handleModalOpen() {
    axios.get(BORED_API)
      .then(response => {
        const { activity } = response.data;
        this.setState({
          modalOpen: true,
          activity: activity,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err
        });
      });

  }
  handleModalClose() {
    this.setState({ modalOpen: false });
  }
  render() {
    return (
      <div className="vh-100  bg-green flex-column flex justify-center items-center">
        {this.state.error &&
          <div className="red bg-black f4 mb4 h3 w5" >
            Error: {this.state.error.message} </div>}
        <button className="f1 b--none outline-transparent br-100 h5 w5 dim ph3 pv2 mb2 dib white bg-black"
          onClick={this.handleModalOpen}>
          Bored?
        </button>
        <Modal closeTimeoutMS={150} isOpen={this.state.modalOpen}>
          <div className="flex flex-column h-100" >
            <header className="flex justify-end">
              <button className="f1 ph3 pv2 mb2 dib white bg-black b--none" onClick={this.handleModalClose}>X</button>
            </header>
            <main className="flex-grow-1 flex flex-column justify-center items-center">
              <h1>Here is something you can do...</h1>
              <p>{this.state.activity}</p>
            </main>
            <footer>
              <h2>Nothin to see here.</h2>
            </footer>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
