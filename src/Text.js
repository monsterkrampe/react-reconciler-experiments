import React, { Component } from 'react';
import { Text as PdfText } from '@react-pdf/renderer';

import PdfContext from './PdfContext';

class Text extends Component {
  render() {
    return (
      <PdfContext.Consumer>
        {(isPdf) => {
          const Text = isPdf ? PdfText : 'text';
          return (
            <Text>{this.props.children}</Text>
          );
        }}
      </PdfContext.Consumer>
      
    );
  }
}

export default Text;
