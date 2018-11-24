import React, { Component } from 'react';
import './Wedding.css';

class Wedding extends Component {
  render() {
    return (
      <div id="Wedding" className="Wedding">
        <div className="Wedding__title">
          <h1>Wedding</h1>
        </div>
        <div className="Wedding__times">
          <div className="Wedding__section">
            <p>Ceremony - <a href="http://rothehouse.com/" target="_blank">Rothe House</a></p>
          </div>
          <div className="Wedding__section">
            <p>Cocktail Hour - <a href="https://twitter.com/bollardsbar?lang=en" target="_blank">Bollards Bar</a></p>
          </div>
          <div className="Wedding__section" target="_blank">
            <p>Dinner Reception - <a href="https://anochtrestaurant.ie/" target="_blank">Anocht</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Wedding;
