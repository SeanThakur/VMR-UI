"use client";
import BarChartComponent from "@/components/BarChartComponent";
import LineChartComponent from "@/components/LineChartComponent";
import MarketSplitByType from "@/components/MarketSplitByType";
import PieChartComponent from "@/components/PieChartComponent";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-8 lg:px-24">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
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
  );
}
