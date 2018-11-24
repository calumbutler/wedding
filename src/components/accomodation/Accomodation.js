import React, { Component } from 'react';
import './Accomodation.css';

class Accomodation extends Component {
  render() {
    return (
      <div id="Accomodation" className="Accomodation">
        <div className="Accomodation__title">
          <h1>Where to Stay</h1>
        </div>
        <div className="Accomodation__divided">
          <div className="Accomodation__times">
            <div className="Accomodation__section Accomodation__section--top">
              <h3>
                <a href="https://www.kilkennyormonde.com/?gclid=EAIaIQobChMI46bN89ne3gIVE1uGCh0-gAfvEAAYASAAEgKWcvD_BwE">Ormonde Hotel</a></h3>
              {/* <img src={rotheHouseJPG} alt="Rothe House"/> */}
              <p>Room starting from €96 per night reserved from June 18th to June 20th.</p>
              <a></a>
              <p><b>Room Block Code: G:407304 </b></p>
              <a href="mailTo:reservations@kilkennyormonde.com?subject=Juliet Van Wagenen and Calum Butler Room Block G:407304" >reservations@kilkennyormonde.com</a>
            </div>
            <div className="Accomodation__section">
              <h3><a href="https://www.springhillcourt.com/">Spring Hill Court</a></h3>
              {/* <img src={cleersJPG} alt="Rothe House"/> */}
              <p>Room block for €79 per night reserved from June 18th to June 20th.</p>
              <p><b>Room Block Code: 76729</b></p>
              <a href="mailTo:reservations@springhillcourt.com?subject=Juliet Van Wagenen and Calum Butler Room Block 76729" >reservations@springhillcourt.com</a>
            </div>
            <div className="Accomodation__section">
              <h3><a href="https://www.kilkennyhibernianhotel.com/?utm_source=mybusiness&utm_medium=organic">Hibernian</a></h3>
              {/* <img src={anochtJPG} alt="Rothe House"/> */}
              <p>Right in the center of Kilkenny, within walking distance of all venues. Wedding party staying here.</p>
            </div>
          </div>
          <div>
            <iframe src="https://www.google.com/maps/d/embed?mid=1Bp1NpmkZai2Es1j4OEFq_-h7G_VFH7jM&hl=en" width="640" height="480"></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Accomodation;
