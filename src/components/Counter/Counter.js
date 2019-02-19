import React, { Component } from 'react';

class Counter extends Component {
  
  state = {
    counter: this.props.initialValue,
    name: 'ironhack',
  }

  
  componentWillMount() {
    console.log('cwm');
  }
  
  componentDidMount() {
    console.log('cdm');
  }

  shouldComponentUpdate() {
    console.log('scu')
    return true;
  }
  
  componentWillUpdate(nextProps, nextState) {
    console.log('cwup');
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('cdup');
  }
  

  handleClick = () => {
    // console.log('click')
    this.setState({
      counter: this.state.counter + 1,
    },()=>{
      this.props.onChange(this.state.counter)
    })
    // console.log('number', this.state);
  }

  render() {
    console.log('render');
    return (
      <div>
        
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default Counter;