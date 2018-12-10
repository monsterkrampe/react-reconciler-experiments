import React from 'react';
import { Text as PdfText } from '@react-pdf/renderer';

import PdfContext from './PdfContext';

interface Props {
  onClick?: () => void;
  children?: React.ReactNode;
}

const Text = (props: Props) => (
  <PdfContext.Consumer>
    {(isPdf) => {
      const Text = isPdf ? PdfText : 'text';
      return (
        <Text {...props}>{props.children}</Text>
      );
    }}
  </PdfContext.Consumer>
  
);

export default Text;
