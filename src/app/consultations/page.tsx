"use client";

import Consultations from "@/components/Home/Consultations/Index";
import Navbar from "@/components/Navbar";
import React, { Fragment } from "react";

const OrganizationPage = () => {
  return (
    <Fragment>
      <Navbar />
      <Consultations />
    </Fragment>
  );
};

export default OrganizationPage;
