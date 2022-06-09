import React from "react";
import { Document, Page } from 'react-pdf';

import pdfFile from './pdf/Amelia_Jones_Tech_Resume.pdf';


export default function DownloadResume() {
    return (
      <Document file={pdfFile}>
        <Page pageNumber={1} />
      </Document>
    );
  }