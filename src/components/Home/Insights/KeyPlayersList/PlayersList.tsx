import React from "react";
import PlayersItem from "./PlayersItem";

const PlayersList = () => {
  return (
    <div className="pb-8">
      <p className="font-roboto text-[26px] font-light leading-[30px] text-black mb-4">
        Key Players
      </p>
      <div className="bg-[#FCFCFC] rounded-[5px] flex flex-col items-start p-4">
        <PlayersItem />
      </div>
    </div>
  );
};

export default PlayersList;
