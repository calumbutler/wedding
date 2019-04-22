import React, { Component } from 'react';
import './Wedding.css';

class Wedding extends Component {
  render() {
    return (
      <div id="Wedding" className="Wedding">
        <div className="Wedding__content">
          <div className="Wedding__title">
            <h1>Wedding</h1>
          </div>
          <div className="Wedding__times">
            <div className="Wedding__section">
              <p>Wednesday, June 19th, 2019</p>
              <br />
              <p><b>Ceremony</b></p>
              <p>3pm</p>
              <p><a href="http://rothehouse.com/" target="_blank">Rothe House Museum and Gardens</a>,
                <br />16 Parliment St. Kilkenny</p>
            </div>
            <div className="Wedding__section">
              <p><b>Cocktail hour</b> at <a href="https://twitter.com/bollardsbar?lang=en" target="_blank">Bollards Pub</a> immediately to Follow</p>
            </div>
            <div className="Wedding__section" target="_blank">
              <p><b>Dinner</b> Served at <a href="https://anochtrestaurant.ie/" target="_blank">Anocht Restaurant</a> at 5:30pm</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Wedding;
