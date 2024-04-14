import React from "react";
import lp1 from "../assets/lp1.jpg";

const Cards = () => {
  return (
    <>
      <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
        <div class="relative mx-6 my-28  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
          <img src={lp1} />
        </div>
        <div class="p-6">
          <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"></h5>
          <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased ">
            Chuwi HeroBook Pro 14.1'' Intel Celeron N4020 Laptop with 8GB RAM,
            256GB SSD, Windows 11, 1TB Expand, FHD IPS, Ultra Slim, USB3.0,
            Mini-HDMI, Webcam
          </p>
        </div>
        <div class="p-6 pt-0">
          <button
            data-ripple-light="true"
            type="button"
            class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none pt-2"
          >
            View Product
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
