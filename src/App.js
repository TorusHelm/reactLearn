import React, { Component } from 'react';
import './App.css';
import HeaderMy from './components/HeaderMy';
import MainMy from './components/MainMy';
import FooterMy from './components/FooterMy';
class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <HeaderMy />
        <MainMy />
        <FooterMy />
      </div>
    );
  }
}

export default App;
