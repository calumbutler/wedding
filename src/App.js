import React, { Component } from 'react';
import './App.css';
import { Parallax, Background } from 'react-parallax';
import Mobile from 'is-mobile';
import { createBrowserHistory } from 'history';
//components
import Wedding from './components/wedding/Wedding';
import Travel from './components/travel/Travel';
import Tourist from './components/tourist/Tourist';
import Accomodation from './components/accomodation/Accomodation';
import Activities from './components/activities/Activities';
import Registry from './components/registry/Registry';
import classNames from 'classnames'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

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
    }),
    isMobile = Mobile();


    return (
      <Router history={history}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
            <div className="App">
              <header className="App__header">
                <h1>Juliet Van Wagenen & Calum Butler</h1>

                <Link
                  to={{ pathname: '/rsvp' }}
                >
                  <h3 className="rsvp">RSVP Here</h3>
                </Link>
                <nav className={navCSS}>
                  <ul>
                    <li onClick={() => {this.scrollToSection('Wedding')}}>Wedding</li>
                    <li onClick={() => {this.scrollToSection('Accomodation')}}>Where to Stay</li>
                    <li onClick={() => {this.scrollToSection('Travel')}}>Getting There</li>
                    <li onClick={() => {this.scrollToSection('Tourist')}}>What to see</li>
                    <li onClick={() => {this.scrollToSection('Registry')}}>Registry</li>
                  </ul>
                </nav>

                <Link
                  to={{ pathname: '/activities' }}
                >
                  <h4 className="activities">Wedding Week Activities</h4>
                </Link>
              </header>
              <div className="App__body">

              <Parallax
                  blur={5}
                  bgImageAlt="the cat"
                  strength={200}
              >
                <Wedding isMobile={isMobile} />
             </Parallax>

             <Parallax
                 blur={10}
                 strength={200}
             >
               <Accomodation isMobile={isMobile} />
             </Parallax>

              <Parallax
                  bgImageAlt="the cat"
                  strength={200}
              >
                <Travel isMobile={isMobile} />
              </Parallax>

              <Parallax
                  blur={10}
                  strength={200}
              >
                <Tourist isMobile={isMobile} />
              </Parallax>

              <Parallax
                  blur={10}
                  strength={200}
              >
                <Registry isMobile={isMobile} />
              </Parallax>
              </div>
            </div>
          )
        }
       />
       <Route
        exact
        path={`${process.env.PUBLIC_URL}/rsvp`}
        render={ () => (
          <div className="App__flex">
            <iframe
              title="rsvp"
              src="https://docs.google.com/forms/d/e/1FAIpQLSc_YctoBgx-dOmmWCvDvMDZwK1N8XFoxuq1zV3tUrQMpfrrKg/viewform?embedded=true"
              width="640"
              height="1184"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
            Loading...
            </iframe>
          </div>
        )
        }
       />

       <Route
        exact
        path={`${process.env.PUBLIC_URL}/activities`}
        render={ () => <Activities />}
       />

     </Switch>
   </Router>
   );
  }
}

export default App;
