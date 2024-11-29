"use client";

import Book from "@/components/Book/Index";
import Navbar from "@/components/Navbar";
import React, { Fragment } from "react";

const ClientPage = () => {
  return (
    <Fragment>
      <Navbar />
      <Book />
    </Fragment>
  );
};

export default ClientPage;
