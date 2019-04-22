import React, { Component } from 'react';
import Slider from "react-slick";
import './Tourist.css';

class Tourist extends Component {
  render() {

    const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1
    };
    return (
      <div id="Tourist" className="Tourist">
        <h1>What to see in the Marble City:</h1>

        <div>
          <Slider {...settings}>
            <div className="TouristSlide TouristSlide--castle">

              <div className="TouristSlide__text">
                  <h3>Kilkenny Castle</h3>
                  <p>You'd be hard-pressed to miss this central Kilkenny structure, which is just a short walk from the downtown. Built in 1195 to control a fording-point of the River Nore and the junction of several routeways, Kilkenny Castle was a symbol of Norman occupation. Today, it hosts beautiful gardens, an art gallery and a ton of history. Check out the "activities" section above to join Calum and Juliet for a tour.</p>
              </div>
            </div>
            <div className="TouristSlide TouristSlide--canices TouristSlide--right">

              <div className="TouristSlide__text">
                  <h3>Canices Cathedral</h3>
                  <p>St Canice’s Cathedral is one of the most prominent sights in Kilkenny, which was once a splendid Medieval city. Many believe the construction of the massive Gothic cathedral began in the 1250s and was completed in 1285, but the religious roots of the site extend back to the 6th Century, when the Church of St Canice stood here. Over the years, the cathedral has maintained many of its 13th Century features despite the collapse of the central tower in 1332 and the overtaking of the property by Oliver Cromwell’s troops in 1650. </p>
              </div>
            </div>
            <div className="TouristSlide TouristSlide--butlerhouse TouristSlide--right">

              <div className="TouristSlide__text">
                  <h3>Butler House</h3>
                  <p>Not Calum's parents house, Butler house is located at the outskirts of the downtown and is an integral part of the Kilkenny Castle Estate. Butler House was home to the Earls of Ormonde who also built Kilkenny Castle. Butler House boasts 13 special bedrooms and suites, all with their own individual character. Designed to provide maximum comfort, each has a modern bathroom, and is decorated with soft co-ordinated fabrics and furnishings. Butler House also has three magnificent reception rooms available for conferences, corporate events, civil wedding ceremonies and exhibitions.</p>
              </div>
            </div>

            <div className="TouristSlide TouristSlide--cleeres">
              <div className="TouristSlide__text">
                  <h3>Cleeres Pub</h3>
                  <p>Located in the heart of downtown on Parliament Street, Cleere's is of Kilkenny's most iconic pubs. Arguably the best pint of Smithwicks in the world is served here. On certain nights you may find yourself in the middle of a trad session at Cleeres. Start here and check out its neighboring pubs for the true local experience.</p>
              </div>
            </div>

            <div className="TouristSlide TouristSlide--woodstock">
              <div className="TouristSlide__text">
                  <h3>Woodstock Gardens</h3>
                  <p>Just a 30 minute drive from Kilkenny, Woodstock House was built in 1745-47 for Sir William Fownes by the architect Francis Bindon. It has a rusticated front facade and is unusual in being built around a small central court. The decorative emphasis of the house was focused upon the front facade. In 1804-06 flanking wings were added to designs by William Robertson. The service yards either side were added at the same time. Both the main house and the wings were built of stone with brick lining inside. The basement vaulting was, unusually, also of brick. Only parts of the east and west walls of the centre block and parts of the wings had no internal brick lining. Like many early 18th century Irish country houses, the decorative emphasis of the building was focused upon the front facade. The five bay garden frontage is much plainer though a very decorative iron staircase was added in the 1850″s by Richard Turner, the famous iron master.</p>
              </div>
            </div>

            <div className="TouristSlide TouristSlide--ardmore">
              <div className="TouristSlide__text">
                  <h3>Ardmore Cliff Walk</h3>
                  <p>A one hour drive from Kilkenny, this walk brings you on cliff-top paths, minor roads and laneways past Early Christian St Declan's Well, Ardmore Round Tower (one of the best preserved in Ireland) 12th Century Cathedral and a lookout post with a variety of flora, fauna and birdlife (coastal birds, Rock Pipits, Pheasant, Kestrel, Peregrine Falcon) and some stunning coastal scenery.</p>
              </div>
            </div>

          </Slider>
        </div>
      </div>
    );
  }
}

export default Tourist;
