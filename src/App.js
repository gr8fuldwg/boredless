import React, { Component } from 'react';
import Modal from "react-modal";
import './App.css';

const appElement = document.getElementById('root');
Modal.setAppElement(appElement);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    }
    this.handleModalOpen = this.handleModalOpen.bind(this);
  }
  handleModalOpen(){
    this.setState({modalOpen: true });
  }
  render() {
    return (
      <div className="vh-100  bg-green flex justify-center items-center">
          <button className="f1 b--none outline-transparent br-100 h5 w5 dim ph3 pv2 mb2 dib white bg-black" 
          onClick={this.handleModalOpen}>
          Bored?
        </button>
        <Modal closeTimeoutMS={150} isOpen={this.state.modalOpen}>
          <h1>I like tacos!</h1>
        </Modal>
      </div>
    );
  }
}

export default App;
