"use client";

import Organizations from "@/components/Home/Organizations/Index";
import Navbar from "@/components/Navbar";
import React, { Fragment } from "react";

const OrganizationPage = () => {
  return (
    <Fragment>
      <Navbar />
      <Organizations />
    </Fragment>
  );
};

export default OrganizationPage;
