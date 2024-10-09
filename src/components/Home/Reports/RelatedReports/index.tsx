import React, { Fragment } from "react";
import RelatedReportItem from "./RelatedReportItem";

type Book = {
  image: string;
  title: string;
};

const RelatedReports = () => {
  const books: Book[] = [
    {
      image: "/images/savedReportBook5.png",
      title: "Global Adhesives & Sealants Market",
    },
    {
      image: "/images/savedReportBook6.png",
      title: "Global Total Reflection X-Ray Fluorescence...",
    },
    {
      image: "/images/savedReportBook7.png",
      title: "Global And GCC HDPE   Pipes Market",
    },
    {
      image: "/images/savedReportBook7.png",
      title: "Global Service Delivery   Automation Market",
    },
    {
      image: "/images/savedReportBook8.png",
      title: "Global Glycyrrhizine (CAS:1405-86-3) Market",
    },
    {
      image: "/images/savedReportBook5.png",
      title: "Global Haemodialysis   Catheters Market",
    },
    {
      image: "/images/savedReportBook6.png",
      title: "Global High Speed Dispenser Market",
    },
    {
      image: "/images/savedReportBook8.png",
      title: "Global Glycyrrhizine (CAS:1405-86-3) Market",
    },
    {
      image: "/images/savedReportBook5.png",
      title: "Global Haemodialysis   Catheters Market",
    },
    {
      image: "/images/savedReportBook6.png",
      title: "Global High Speed Dispenser Market",
    },
    {
      image: "/images/savedReportBook8.png",
      title: "Global Glycyrrhizine (CAS:1405-86-3) Market",
    },
    {
      image: "/images/savedReportBook5.png",
      title: "Global Haemodialysis   Catheters Market",
    },
    {
      image: "/images/savedReportBook6.png",
      title: "Global High Speed Dispenser Market",
    },
  ];

  return (
    <Fragment>
      <div className="text-lg text-gray-800 font-light mb-4">
        Related Reports
      </div>
      <div className="relative w-full bg-[#0DAFBF1A] shadow-related-report rounded-lg overflow-x-scroll flex space-x-8 px-4 pt-2">
        {books.map((book, idx) => (
          <RelatedReportItem key={idx} image={book.image} title={book.title} />
        ))}
      </div>
    </Fragment>
  );
};

export default RelatedReports;
