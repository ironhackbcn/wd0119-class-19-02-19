import React, { Component } from 'react';

class Alert extends Component {
  render() {
    return (
      <div className='alert classes'>
        {this.props.children}
      </div>
    );
  }
}

export default Alert;