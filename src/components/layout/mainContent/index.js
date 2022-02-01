import React, { useState } from 'react';
import file from 'assets/temp/fw9.pdf';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const MainContent = (props) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const { size = '', className = '', auth = false} = props;

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    if (props.children || auth) {
        return(
            <div className={(size == 'small' ? 'dashboard small ' : 'dashboard ') + className}>
                {props.children}
            </div>
        );
    }
    else {
        return(
            <div className={`dashboard ${className}`}>
                <Document
                    file={file}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </div>
        );
    }
}

export default MainContent;