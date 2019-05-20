import React, { Component } from 'react';
import PDF from 'react-pdf-js';
import classNames from 'classnames';
// assets
import travelPDF from './travel.pdf';
import './Travel.css';

class Travel extends Component {

  state = {
    modalVisible: false,
  }
  _onDocumentLoadSuccess() {
      console.log('loaded')
  }
  _toggleModal(key, value){
    this.setState({[key]: value});
  }
  _expandPDF(evt){
    console.log(evt)
  }
  render() {
    const { props, state } = this,
          travelCSS = classNames({
            Travel: true,
            Travel__mobile: props.isMobile,
          }),
          modalCSS = classNames({
            hidden: state.modalVisible,
            'Travel__modal': true,
          });

    console.log(props)
    return (
      <div id="Travel" className={travelCSS}>
        <div className="Travel__title">
          <h1>Getting There</h1>
          { !props.isMobile
           && <object
                onClick={(evt) => this._expandPDF(evt)}
                data={travelPDF}
                type="application/pdf"
                width="800px"
                height="2040px">
             </object>
          }

          { props.isMobile
           && <div className="Travel__link">
                <a href={travelPDF} traget="_blank" download>Download Travel PDF</a>
              </div>
          }


        </div>

        <div className={modalCSS}>

          <embed src= "travel.pdf" width= "500" height= "375" />

        </div>
      </div>
    );
  }
}

// <PDF
// onClick={() => { this._updateStateAttribute('modalVisible', false) }}
//  file={travelPDF}
//  onDocumentComplete={this._onDocumentLoadSuccess}
//  page={1}
// />



export default Travel;
