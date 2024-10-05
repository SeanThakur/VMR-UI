"use client";

import BarChartComponent from "@/components/BarChartComponent";
import LineChartComponent from "@/components/LineChartComponent";
import MarketEstimate from "@/components/MarketEstimate";
import MarketSplitByType from "@/components/MarketSplitByType";
import Navbar from "@/components/Navbar";
import PieChartComponent from "@/components/PieChartComponent";
import SearchInput from "@/components/SearchInput";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <SearchInput />
      <div className="bg-gray-100 min-h-screen py-4 px-4 sm:px-8 lg:px-24">
        <div className="container mx-auto">
          <p className="text-md sm:text-2xl font-bold text-gray-600 text-center sm:text-left mb-4">
            Global Treasury And Risk Management Software Market
          </p>

          <div className="flex flex-col pb-6 md:flex-row mt-10">
            <div className="w-full md:w-3/5 rounded-lg flex flex-col">
              <MarketEstimate />
            </div>

            <div className="w-full md:w-2/5 rounded-lg flex flex-col space-y-8 md:ml-8">
              <div className="flex-grow bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Report Details</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Pages:</strong> 202 Pages
                  </li>
                  <li>
                    <strong>Format:</strong> PDF, PPTX, PNG
                  </li>
                  <li>
                    <strong>Language:</strong> English
                  </li>
                  <li>
                    <strong>Published:</strong> February 2024
                  </li>
                  <li>
                    <strong>Access Type:</strong> Enterprise User
                  </li>
                  <li>
                    <strong>Market Value:</strong> $112.7 Billion (2023)
                  </li>
                  <li>
                    <strong>CAGR:</strong> 6.27%
                  </li>
                  <li>
                    <strong>Segments:</strong>
                    <ul className="pl-4 list-disc">
                      <li>
                        By Type (USA-sourced, South America-sourced,
                        Australia-sourced)
                      </li>
                      <li>
                        By Application (Scientific Research, Industrial
                        Production)
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="flex-grow w-full">
                <PieChartComponent />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 mb-8">
          <h1 className="text-xl sm:text-2xl font-light uppercase mb-4 sm:mb-0">
            Quantitative Insights
          </h1>
          <span className="underline text-md font-bold cursor-pointer">
            View all
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="col-span-1">
            <BarChartComponent />
          </div>
          <div className="col-span-1">
            <PieChartComponent />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="col-span-1">
            <MarketSplitByType />
          </div>
          <div className="col-span-1">
            <MarketSplitByType />
          </div>
          <div className="col-span-1">
            <LineChartComponent />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
