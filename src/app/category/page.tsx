"use client";

import CategoriesListing from "@/components/Categories/Index";
import Navbar from "@/components/Navbar";
import React, { Fragment } from "react";

const Category = () => {
  return (
    <Fragment>
      <Navbar />
      <CategoriesListing />
    </Fragment>
  );
};

export default Category;
