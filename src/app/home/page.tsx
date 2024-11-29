"use client";

import Reports from "@/components/Home/Reports/Index";
import Navbar from "@/components/Navbar";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Reports />
    </Fragment>
  );
}
