import React from "react";
import Cards from "./Cards";
import Cardsac2 from "./Cardsac2";
import Cardsac3 from "./Cardsac3";
import Cards4 from "./Cards4";
import Cards5 from "./Cards5";
import Cards6 from "./Cards6";
import Cards7 from "./Cards7";
import Cards8 from "./Cards8";
import Cards9 from "./Cards9";

const Cardsunion = () => {
  return (
    <div className="">
      <div className="w-full h-24 bg-slate-900 pl-8 pt-5">
        <h1 className="text-4xl font-medium text-white ">Air Conditioners</h1>
      </div>
      <div className="flex gap-8 p-5 justify-between pt-2">
        <Cards />
        <Cardsac2 />
        <Cardsac3 />
      </div>
      <div className="w-full h-24 bg-slate-900 pl-8 pt-5">
        <h1 className="text-4xl font-medium text-white ">TeleVisions</h1>
      </div>
      <div className="flex justify-between gap-8 p-5">
        <Cards4 />
        <Cards5 />
        <Cards6 />
      </div>
      <div className="w-full h-24 bg-slate-900 pl-8 pt-5">
        <h1 className="text-4xl font-medium text-white ">Laptops</h1>
      </div>
      <div className="flex justify-between gap-8 p-5">
        <Cards7 />
        <Cards8 />
        <Cards9 />
      </div>
    </div>
  );
};

export default Cardsunion;
