import React from "react";
import SavedReportItem from "./SavedReportItem";

type Book = {
  image: string;
  title: string;
  chipText?: string;
  chipStyle?: string;
};

const SavedReports = () => {
  const books: Book[] = [
    {
      image: "/images/savedReportBook1.png",
      title: "Global Treasury And Risk Management Software Market",
    },
    {
      image: "/images/savedReportBook2.png",
      title: "Global Morel Mushroom Market",
      chipText: "Requested",
      chipStyle: "bg-[#ECE9B1] text-yellow-700",
    },
    {
      image: "/images/savedReportBook2.png",
      title: "Global Electric Vehicle Traction Motor Market",
      chipText: "Requested",
      chipStyle: "bg-[#ECE9B1] text-yellow-700",
    },
    {
      image: "/images/savedReportBook3.png",
      title: "Global Bovine Serum Market",
      chipText: "Saved",
      chipStyle: "bg-[#ECB1B1] text-red-700",
    },
    {
      image: "/images/savedReportBook4.png",
      title: "Global Peripheral Intravenous Catheters PIVC Market",
      chipText: "Saved",
      chipStyle: "bg-[#ECB1B1] text-red-700",
    },
  ];

  return (
    <div className="flex flex-row gap-14 mt-3 mb-5">
      {books.map((book, index) => (
        <SavedReportItem
          key={index}
          image={book.image}
          title={book.title}
          chipText={book.chipText}
          chipStyle={book.chipStyle}
        />
      ))}
    </div>
  );
};

export default SavedReports;
