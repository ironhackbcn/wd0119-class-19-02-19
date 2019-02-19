import React, { Component } from 'react';
import Header from './components/Header';
import Card from './components/Card/Card';
import Button from './components/Button/Button';
import Alert from './components/Alert/Alert';
import logo from './logo.svg';
import Counter from './components/Counter/Counter';
import './App.css';
import DisplayCounter from './components/Counter/DisplayCounter';

class App extends Component {
  state = {
    counter: 0,
    isVisible: true,
  }  

  handleToggle = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    })
  } 
  render() {
    // const data = [
    //   { title: 'title 1' },
    //   { title: 'title 2' },
    //   { title: 'title 3' },
    //   { title: 'title 4' },
    //   { title: 'title 5' }
    // ]

    const title = 'title inside var';
    return (
      <div className="App">
        <button onMouseEnter={this.handleToggle}>Toggle</button>
        {this.state.isVisible ? <DisplayCounter value={this.state.counter} /> : null }
        {this.state.isVisible && <Counter initialValue={this.state.counter} onChange={(counter) => {
          this.setState({
            counter,
          })
        }} /> }
        
      </div>
    );
  }
}


export default App; // -> import App from './app'
// export const someVar = () => {}; // import { someVar } from './App';
