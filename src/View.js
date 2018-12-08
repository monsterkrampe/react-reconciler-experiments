import React from 'react';
import { View as PdfView } from '@react-pdf/renderer';

import PdfContext from './PdfContext';

const View = (props) => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    ...props.style
  };

  return (
    <PdfContext.Consumer>
      {(isPdf) => {
        const View = isPdf ? PdfView : 'view';
        return (
          <View
            style={style}
          >
            {props.children}
          </View>
        );
      }}
    </PdfContext.Consumer>
  );
}

export default View;
