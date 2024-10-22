import React from "react";
import PlayersItem from "./PlayersItem";

const PlayersList = () => {
  return (
    <div className="pb-8">
      <p className="font-roboto text-[26px] font-light leading-[30px] text-black mb-4">
        Key Players
      </p>
      <div className="bg-[#FCFCFC] flex flex-col md:flex-row items-start h-[400px] md:h-[800px] overflow-y-scroll">
        <div className="w-full md:w-[50%] rounded-[5px] h-full">
          {[0, 1, 2, 3, 4, 5, 6].map((_, idx) => (
            <PlayersItem key={idx} bgColor={idx % 2 ? "#FFF" : "#F7F7F7"} />
          ))}
        </div>
        <div className="w-full md:w-[50%] bg-[#FFFFFF] shadow-table-content h-full"></div>
      </div>
    </div>
  );
};

export default PlayersList;
