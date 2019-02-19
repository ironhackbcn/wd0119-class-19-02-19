import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  render() {
    return (
      <div className={this.props.primary ? 'btn primary large' : ''}>
        {this.props.text}
      </div>
    );
  }
}

export default Button;