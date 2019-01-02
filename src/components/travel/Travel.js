import React, { Component } from 'react';
import { pdfjs, Document } from 'react-pdf';
import PDF from 'react-pdf-js';
import travelPDF from './travel.pdf';
import './Travel.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Travel extends Component {
  onDocumentLoadSuccess() {
      console.log('loaded')
  }
  render() {
    return (
      <div id="Travel" className="Travel">
        <div className="Travel__title">
          <h1>Getting There</h1>

          <PDF
           file={travelPDF}
           onDocumentComplete={this.onDocumentLoadSuccess}
           page={1}
         />
          {/*<Document
           file={travelPDF}
           onLoadSuccess={this.onDocumentLoadSuccess}>
          </Document>*/}
        </div>
      </div>
    );
  }
}

export default Travel;
