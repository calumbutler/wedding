import React, { Component } from 'react';
import './Wedding.css';
import rotheHouseJPG from './rothe_house.jpg';
import cleersJPG from './cleers.jpg';
import anochtJPG from './anocht.jpg';

class Wedding extends Component {
  render() {
    return (
      <div id="Wedding" className="Wedding">
        <div className="Wedding__title">
          <h1>Wedding</h1>
        </div>
        <div className="Wedding__times">
          <div className="Wedding__section">
            <p>2:30 pm - <a href="http://rothehouse.com/" target="_blank">Rothe House</a></p>
            {/* <img src={rotheHouseJPG} alt="Rothe House"/> */}
          </div>
          <div className="Wedding__section">
            <p>4:30 pm - <a href="http://cleeres.com/" target="_blank">Cleere's Pub</a></p>
            {/* <img src={cleersJPG} alt="Rothe House"/> */}
          </div>
          <div className="Wedding__section" target="_blank">
            <p>6:00 pm - <a href="https://anochtrestaurant.ie/">Anocht</a></p>
            {/* <img src={anochtJPG} alt="Rothe House"/> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Wedding;
