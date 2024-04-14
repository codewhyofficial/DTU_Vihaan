import React from "react";
import ac1 from "../assets/51NbjzUopGL._SX679_.jpg";

const Cards = () => {
  return (
    <>
      <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border  text-gray-700 shadow-md">
        <div class="relative mx-4   overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white  shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
          <img src={ac1} />
        </div>
        <div class="p-6 pt-10">
          <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"></h5>
          <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Voltas 1.4 ton 5 Star, Inverter Split AC (Copper, 4-in-1 Adjustable
            Mode, Anti-dust Filter, 2024 Model, 175V Vectra CAR, White)
          </p>
        </div>
        <div class="p-6 pt-10">
          <button
            data-ripple-light="true"
            type="button"
            class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
          >
            View Product
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
