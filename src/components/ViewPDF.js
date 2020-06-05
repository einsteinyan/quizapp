import React, { Component  } from 'react';
import { Document, Page, pdfjs} from 'react-pdf';
import PDFile from '../assets/files/example.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class ViewPDF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
    };
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { numPages } = this.state;
    return (
        <div>
          <Document
            file={PDFile}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={1} />
          </Document>
          <p>Page {1} of {numPages}</p>
        </div>
      );
  }
}

export default ViewPDF;