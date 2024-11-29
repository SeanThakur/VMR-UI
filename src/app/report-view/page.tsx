"use client";

import Navbar from "@/components/Navbar";
import PDFViewer from "@/components/PDFViewer/Index";
import React, { Fragment } from "react";

const ReportViewPage = () => {
  return (
    <Fragment>
      <Navbar />
      <PDFViewer />
    </Fragment>
  );
};

export default ReportViewPage;
