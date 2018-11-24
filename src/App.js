import React, { Component } from 'react';
import './App.css';
import { Parallax, Background } from 'react-parallax';
//components
import Wedding from './components/wedding/Wedding';
import Travel from './components/travel/Travel';
import Tourist from './components/tourist/Tourist';
import Accomodation from './components/accomodation/Accomodation';
import Registry from './components/registry/Registry';
import classNames from 'classnames'

class App extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      isSticky: false,
      isCollapsed: false,
    };

    this.pinHeaderScroll = this.pinHeaderScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.pinHeaderScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.pinHeaderScroll)
  }

  pinHeaderScroll(evt){
    const isSticky = window.pageYOffset > (window.innerWidth - 50);
    const isCollapsed = window.pageYOffset > (window.innerWidth - 150);

    this.setState({
      isSticky,
      isCollapsed,
    });

  }

  scrollToSection(id){
    var element = document.getElementById(id);

    if(element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  render() {

    const navCSS = classNames({
      App__nav: true,
      'App__nav--collapsed': this.state.isCollapsed,
      'App__nav--sticky': this.state.isSticky,
    })
    return (
      <div className="App">
        <header className="App__header">
          <h1>Juliet Van Wagenen & Calum Butler</h1>
          <nav className={navCSS}>
            <ul>
              <li onClick={() => {this.scrollToSection('Wedding')}}>Wedding</li>
              <li onClick={() => {this.scrollToSection('Accomodation')}}>Where to Stay</li>
              <li onClick={() => {this.scrollToSection('Travel')}}>Getting There</li>
              <li onClick={() => {this.scrollToSection('Tourist')}}>What to see</li>
              <li onClick={() => {this.scrollToSection('Registry')}}>Registry</li>
            </ul>
          </nav>
        </header>
        <div className="App__body">

        <Parallax
            blur={5}
            bgImageAlt="the cat"
            strength={200}
        >
          <Wedding />
       </Parallax>

       <Parallax
           blur={10}
           strength={200}
       >
         <Accomodation />
       </Parallax>

        <Parallax
            bgImageAlt="the cat"
            strength={200}
        >
          <Travel />
        </Parallax>

        <Parallax
            blur={10}
            strength={200}
        >
          <Tourist />
        </Parallax>

        <Parallax
            blur={10}
            strength={200}
        >
          <Registry />
        </Parallax>
        </div>
      </div>
    );
  }
}

export default App;
