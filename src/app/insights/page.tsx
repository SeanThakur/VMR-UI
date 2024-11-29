"use client";

import Insights from "@/components/Home/Insights/Index";
import Navbar from "@/components/Navbar";
import React, { Fragment } from "react";

const InsightsPage = () => {
  return (
    <Fragment>
      <Navbar /> <Insights />
    </Fragment>
  );
};

export default InsightsPage;
