import React, { Component } from 'react';
import { View as PdfView } from '@react-pdf/renderer';

import PdfContext from './PdfContext';

class View extends Component {
  render() {
    const style = {
      display: 'flex',
      flexDirection: 'column',
      ...this.props.style
    };

    return (
      <PdfContext.Consumer>
        {(isPdf) => {
          const View = isPdf ? PdfView : 'view';
          return (
            <View
              style={style}
            >
              {this.props.children}
            </View>
          );
        }}
      </PdfContext.Consumer>
    );
  }
}

export default View;
