"use client";

import Navbar from "@/components/Navbar";
import Categories from "@/components/ViewAllCategories";
import React, { Fragment } from "react";

const CategoriesViewAll = () => {
  return (
    <Fragment>
      <Navbar />
      <Categories />
    </Fragment>
  );
};

export default CategoriesViewAll;
