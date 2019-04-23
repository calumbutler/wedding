// vendor
import React, { Component } from 'react';
import './Activities.css';

class Activities extends Component {
  render() {
    return (
      <div id="Activities" className="Activities">
        <div className="Activities__content">
          <h2>Come Hang Out!</h2>

          <p>In town for a bit? Come join us for some optional activities around Kilkenny in the days leading up to the wedding!</p>
          <hr />

          <div className="Activities__day">
            <h3>Monday, June 17th</h3>
            <div className="Activities__event">
              <p><b>3 pm</b></p>
              <p>Tour of Butler Castle</p>
              <p><a href="http://kilkennycastle.ie/tickets-and-times/" target="_blank">Ticket Prices and Information</a></p>
            </div>

            <div className="HR--small" />

            <div className="Activities__event">
              <p><b>7:30 pm</b></p>
              <p>Stag/Hen Pub Crawls (AKA Bachelor/Bachelorette Parties)</p>
              <p>Meet us at the <a href="https://www.kilkennyhibernianhotel.com/hibernian-bar.html" target="_blank">Hibernian Hotel Bar</a> before we head our separate ways for a bit to check out some of our favorite pubs!</p>
              <p>(<b>NOTE:</b> This isn't gender specific. Join whatever party you like, dude. Join 'em both if you can.)</p>
            </div>
          </div>

          <hr />

          <div className="Activities__day">
            <h3>Tuesday, June 18th</h3>

            <div className="Activities__event">
              <p><b>2 pm</b></p>
              <p>Smithwick’s Brewery Tour</p>
              <p><a href="https://www.smithwicksexperience.com/tickets" target="_blank">Get your tickets here in advance</a></p>
            </div>

            <div className="HR--small" />

            <div className="Activities__event">
              <p><b>8 pm</b></p>
              <p>Welcome Drinks</p>
              <p><a href="https://www.kilkennyhibernianhotel.com/hibernian-bar.html" target="_blank">Hibernian Hotel Bar</a></p>
            </div>
          </div>

          <hr />
          <p>fin</p>

         </div>
      </div>
    );
  }
}

export default Activities;
