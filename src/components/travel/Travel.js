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

    const modalCSS = classNames({
      hidden: this.state.modalVisible,
      'Travel__modal': true,
    });
    return (
      <div id="Travel" className="Travel">
        <div className="Travel__title">
          <h1>Getting There</h1>
          <object onClick={(evt) => this._expandPDF(evt)} data={travelPDF} type="application/pdf" width="800px" height="2040px">

          </object>


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
