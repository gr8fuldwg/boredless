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
    this.handleModalClose = this.handleModalClose.bind(this);
   
  }
  handleModalOpen(){
    this.setState({modalOpen: true });
  }
  handleModalClose(){
    this.setState({modalOpen: false});
  }
  render() {
    return (
      <div className="vh-100  bg-green flex justify-center items-center">
          <button className="f1 b--none outline-transparent br-100 h5 w5 dim ph3 pv2 mb2 dib white bg-black" 
          onClick={this.handleModalOpen}>
          Bored?
        </button>
        <Modal closeTimeoutMS={150} isOpen={this.state.modalOpen}>
          <header className="flex justify-end">
          <button onClick={this.handleModalClose}>X</button>
          </header>
          <main>
            <h1>Look a modal!</h1>
          </main>
          <footer>
            <h2>Nothin to see here.</h2>
          </footer>
        </Modal>
      </div>
    );
  }
}

export default App;
