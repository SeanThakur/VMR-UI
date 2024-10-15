import { tableData, TableData } from "@/utils/data";
import { Fragment, useState } from "react";

const TabluarData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [sortColumn, setSortColumn] = useState<keyof TableData>("region");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (column: keyof TableData) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const sortedData = [...tableData].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) {
      return sortOrder === "asc" ? -1 : 1;
    }
    if (a[sortColumn] > b[sortColumn]) {
      return sortOrder === "asc" ? 1 : -1;
    }
    return 0;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <Fragment>
      <p className="mt-8 text-black font-normal text-[20px]">Tabular Data</p>
      <div className="container py-4 my-4 bg-white">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              {[
                "Region",
                "Country",
                "Segment",
                "Sub-Segment",
                "2022",
                "2023",
                "7yr CAGR%",
              ].map((header, index) => (
                <th
                  key={index}
                  onClick={() =>
                    handleSort(
                      header
                        .toLowerCase()
                        .replace(/\s+/g, "") as keyof TableData
                    )
                  }
                  className="py-2 px-4 cursor-pointer text-left border-b border-gray-200"
                >
                  {header}{" "}
                  {sortColumn === header.toLowerCase().replace(/\s+/g, "") &&
                    (sortOrder === "asc" ? "▲" : "▼")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
              >
                <td className="py-2 px-4 border-b border-gray-200">
                  {item.region}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {item.country}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {item.segment}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {item.subSegment}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {item.year2022}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {item.year2023}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {item.cagr}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4 px-4">
          <div>
            Showing {indexOfFirstItem + 1} to{" "}
            {Math.min(indexOfLastItem, tableData.length)} of {tableData.length}{" "}
            entries
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handlePrevPage}
              className={`px-4 py-2 rounded ${
                currentPage === 1
                  ? "bg-transparent text-gray-500"
                  : "bg-transparent text-gray-600"
              }`}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1
                    ? "bg-gray-500 text-white"
                    : "bg-transparent text-gray-600"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              className={`px-4 py-2 rounded ${
                currentPage === totalPages
                  ? "bg-transparent text-gray-500"
                  : "bg-transparent text-gray-600"
              }`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TabluarData;
