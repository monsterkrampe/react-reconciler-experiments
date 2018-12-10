import React from 'react';
import ReactPDF, { Page, Document } from '@react-pdf/renderer';

import App from './App';
import PdfContext from './PdfContext';

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4">
      <PdfContext.Provider value={true}>
        <App />
      </PdfContext.Provider>
    </Page>
  </Document>
);

ReactPDF.render(<MyDocument/>, `${__dirname}/example.pdf`);
