import React, { Component } from 'react';

import Header from './Header.jsx';
import { Footer } from './Footer.jsx';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}