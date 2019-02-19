import React, { Component } from 'react';
import './header.css';



class Header extends Component {
  sayHello(name) {
    const lastName = {
      last: 'lastname',
      middle: 'middle name'
    }
    return <h2>hello {name} {lastName.last}</h2>
  }

  render(){
    const name = <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, deleniti velit. Optio, veniam. Cupiditate quos quasi ullam, velit consequuntur ea voluptas alias nam eveniet, quidem, blanditiis labore mollitia perspiciatis accusantium.</p>;
    return (
      <div>
        <h1 className="header">Header</h1>
        {this.sayHello('ironMan')}
        <h2>ghjk</h2>
      </div>
    );
  }
}

export default Header;
