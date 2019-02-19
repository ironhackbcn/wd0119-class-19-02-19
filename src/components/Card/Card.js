import React, { Component } from 'react';

class Card extends Component {
  render() {
    console.log('props', this.props);
    return (
      <div>
        <img src={this.props.src} alt=""/>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default Card;
