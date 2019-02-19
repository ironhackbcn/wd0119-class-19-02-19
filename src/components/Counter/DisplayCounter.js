import React, { Component } from 'react';

class DisplayCounter extends Component {
  render() {
    return (
      <div>
        <p>{this.props.value}</p>
      </div>
    );
  }
}

export default DisplayCounter;